import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { globalLocatorsPage } from "../../pom/globalLocatorsPage";
import { inventoryPage } from "../../pom/inventory/inventoryPage";
import { checkoutPage } from "../../pom/cart/checkoutPage";
const gl = new globalLocatorsPage;
const inventoryTestPage = new inventoryPage;
const checkoutTestPage = new checkoutPage;
let products = [];
let backpackProduct;

When("I add every product to cart and get their values", () => {
    inventoryTestPage.addAllProductsToCart();
    cy.fixture('products').then((data) => {
        cy.wrap(data.products).each((product, index) => {
            cy.getValuesForProduct(product.name, index).then(productData => {
                products.push({ ...product, ...productData });
            });
        });
    });
});

Then("I assert all of the values for each item", () => {
    cy.wrap(products).each((product, index) => {
        cy.xpath(gl.divInventoryItemName).eq(index).click();
        cy.xpath(gl.divInventoryItemName).should('contain', product.productName);
        cy.xpath(gl.divInventoryItemPrice).should('contain', product.price);
        cy.xpath(gl.divInventoryItemDescription).should('contain', product.description);
        cy.xpath(gl.imgInventoryItemImage).should('have.attr', 'src').and('include', product.imageSource);
        cy.get('[data-test="remove"]').should('exist');
        cy.go('back');
    })
});

When("I remove every product from the cart and assert", () => {
    inventoryTestPage.removeAllProductsFromCart();
});

Then("I add one item and go to cart to assert", () => {
    backpackProduct = products.find(product => product.name.includes('Backpack'));
    cy.addToCart(gl.buttonAddBackpack);
    inventoryTestPage.goToCartAndAssert(backpackProduct);
});

Then("I go to checkout, enter data and assert success", () => {
    cy.clickOnElement(gl.buttonCheckout);
    checkoutTestPage.assertEmptyFieldError();
    checkoutTestPage.fillOutCheckoutInformation();
    checkoutTestPage.assertOrderInformation(backpackProduct);
    checkoutTestPage.finishOrderAndAssertPurchase();
});