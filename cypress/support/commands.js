// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { globalLocatorsPage } from "../pom/globalLocatorsPage";
const gl = new globalLocatorsPage;
import CryptoJS from 'crypto-js';

Cypress.Commands.add('login', (username, encryptedPassword) => {
    cy.decryptPassword(encryptedPassword).then((decryptedPassword) => {
      cy.visit(Cypress.config().baseUrl);
      cy.xpath(gl.inputUsername).clear()
        .should('have.value', '')
        .type(username)
        .should('have.value', username);
      cy.xpath(gl.inputPassword).clear()
        .should('have.value', '')
        .type(decryptedPassword, { log: false });
      cy.xpath(gl.inputLoginButton).click();
      if(username == "locked_out_user"){
        cy.assertExactText(gl.h3Error, "Epic sadface: Sorry, this user has been locked out.");
      } else {
        cy.url().should('include', '/inventory.html');
        cy.xpath(gl.inputLoginButton).should('not.exist');
      }
    });
  });

  Cypress.Commands.add('clickOnElement', (selector, time = 0) => {
    cy.xpath(selector).should('be.visible').wait(time).click().then($el => {
        if (!$el) {
          throw new Error(`Element with selector "${selector}" was not found`);
        }
      });
  })

  Cypress.Commands.add('inputText', (selector, text, time = 0) => {
    cy.xpath(selector).should('be.visible')
    .wait(time)
    .clear()
    .type(text)
    .should('have.value', text);
  })

  Cypress.Commands.add('assertExactText', (selector, text) => {
    cy.xpath(selector).should('have.text', text);
  })

  Cypress.Commands.add('assertPartialText', (selector, text) => {
    cy.xpath(selector).should('contain', text);
  })

  Cypress.Commands.add('shouldExist', (selector) => {
    cy.xpath(selector).should('exist');
  })

  Cypress.Commands.add('addToCart', (addButton) => {
    removeButton = addButton.replace('add-to-cart', 'remove');
    cy.xpath(addButton).click();
    cy.xpath(gl.shoppingCartBadge).should('exist');
    cy.xpath(removeButton).should('contain', 'Remove');
  });

  Cypress.Commands.add('removeFromCart', (addButton) => {
    removeButton = addButton.replace('add-to-cart', 'remove');
    cy.xpath(gl.shoppingCartBadge).then($badge => {
      if ($badge.length > 0) {
        cy.wrap($badge).invoke('text').then(currentNumber => {
          currentNumber = currentNumber;
          cy.xpath(removeButton).click();
          
          if (currentNumber > 1) {
            cy.xpath(gl.shoppingCartBadge).should('contain', currentNumber - 1);
          } else {
            cy.xpath(gl.shoppingCartBadge).should('not.exist');
          }
        });
      } else {
        cy.xpath(removeButton).click();
        cy.xpath(gl.shoppingCartBadge).should('not.exist');
      }
    });
    cy.xpath(addButton).should('contain', 'Add to cart');
  });

  
  Cypress.Commands.add('getValuesForProduct', (selector, elementPosition) => {
    return cy.xpath(gl.divInventoryItemDescription)
      .eq(elementPosition)
      .invoke('text')
      .then(description => {
        return cy.xpath(gl.divInventoryItemPrice)
          .eq(elementPosition)
          .invoke('text')
          .then(price => {
            return cy.xpath(gl.divInventoryItemName)
              .eq(elementPosition)
              .invoke('text')
              .then(productName => {
                expect(selector).to.equal(productName);
                return cy.xpath(gl.imgInventoryItemImage)
                  .eq(elementPosition)
                  .invoke('attr', 'src')
                  .then(imageSource => {
                    expect(imageSource).to.include("1200x1500");
                    return {
                      description,
                      price,
                      productName,
                      imageSource
                    };
                  });
              });
          });
      });
  });

Cypress.Commands.add('decryptPassword', (encryptedPassword) => {
    const secretKey = Cypress.env('secretKey');
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  });