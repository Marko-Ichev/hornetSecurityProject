import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { globalLocatorsPage } from "../../pom/globalLocatorsPage";
const gl = new globalLocatorsPage;

Then("I assert that the product is added in the cart", () => {
    cy.addToCart(gl.buttonAddFleeceJacket);
});