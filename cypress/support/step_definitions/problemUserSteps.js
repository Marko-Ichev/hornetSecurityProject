import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { globalLocatorsPage } from "../../pom/globalLocatorsPage";
const gl = new globalLocatorsPage;

When("I try to assert the source of the image", () => {
    // I included 3 different ways to assert the image:
    cy.xpath(`//img[@data-test="inventory-item-sauce-labs-onesie-img" and @src="/static/media/red-onesie-1200x1500.2ec615b2.jpg"]`).should('exist');
    cy.xpath(`//img[contains(@src,"red-onesie")]`).should('exist');
    cy.get('[data-test="inventory-item-sauce-labs-onesie-img"').should('have.attr', 'src').and('include', "red-onesie");
});