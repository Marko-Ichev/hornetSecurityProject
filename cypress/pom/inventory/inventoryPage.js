import { globalLocatorsPage } from "../globalLocatorsPage";
const { faker } = require('@faker-js/faker');
const gl = new globalLocatorsPage;

export class inventoryPage {

    addAllProductsToCart() {
        cy.addToCart(gl.buttonAddBackpack);
        cy.addToCart(gl.buttonAddBikeLight);
        cy.addToCart(gl.buttonAddBoltTShirt);
        cy.addToCart(gl.buttonAddFleeceJacket);
        cy.addToCart(gl.buttonAddOnesie);
        cy.addToCart(gl.buttonAddTShirtRed);
    }

    removeAllProductsFromCart() {
        cy.removeFromCart(gl.buttonAddBackpack);
        cy.removeFromCart(gl.buttonAddBikeLight);
        cy.removeFromCart(gl.buttonAddBoltTShirt);
        cy.removeFromCart(gl.buttonAddFleeceJacket);
        cy.removeFromCart(gl.buttonAddOnesie);
        cy.removeFromCart(gl.buttonAddTShirtRed);
    }

    goToCartAndAssert(productInfo) {
        cy.clickOnElement(gl.shoppingCart);
        cy.xpath(gl.divInventoryItemDescription).should('contain', productInfo.description);
        cy.xpath(gl.divInventoryItemName).should('contain', productInfo.name);
        cy.xpath(gl.divInventoryItemPrice).should('contain', productInfo.price);
    }
}