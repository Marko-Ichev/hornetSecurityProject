import { globalLocatorsPage } from "../globalLocatorsPage";
const { faker } = require('@faker-js/faker');
const gl = new globalLocatorsPage;


export class checkoutPage {
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    postalCode = faker.location.zipCode();

    assertEmptyFieldError() {
        cy.clickOnElement(gl.inputContinue);
        cy.xpath(gl.h3Error).should('exist');
    }

    fillOutCheckoutInformation() {
        cy.inputText(gl.inputFirstName, this.firstName);
        cy.inputText(gl.inputLastName, this.lastName);
        cy.inputText(gl.inputPostalCode, this.postalCode);
        cy.clickOnElement(gl.inputContinue);
    }

    assertOrderInformation(productInfo) {
        cy.xpath(gl.divInventoryItemDescription).should('contain', productInfo.description);
        cy.xpath(gl.divInventoryItemName).should('contain', productInfo.name);
        cy.xpath(gl.divInventoryItemPrice).should('contain', productInfo.price);
    }

    finishOrderAndAssertPurchase() {
        cy.clickOnElement(gl.buttonFinish);
        cy.xpath(gl.h3Complete).should('contain', "Thank you for your order!");
        cy.clickOnElement(gl.buttonBackToProducts);
        cy.url().should('include', '/inventory.html');
    }

}