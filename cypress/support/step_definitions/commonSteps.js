import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { globalLocatorsPage } from "../../pom/globalLocatorsPage";
const gl = new globalLocatorsPage;

Given('I log in as {string} user', user => {
    cy.login(user + '_user', Cypress.env('encryptedPassword'));
});

Then ('I log out', () => {
    cy.clickOnElement(gl.buttonBurgerMenu);
    cy.clickOnElement(gl.logoutSidebar);
    cy.url().should('not.include', '/inventory.html');
});