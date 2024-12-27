/// <reference types="cypress"/>

describe("#testcase-1 : render-component-solution-test", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("rendering correctly", () => {
    cy.get("#main").should("exist");
  });

});



describe('Check items category', () => {
  it('All displayed items should belong to category Shakes', () => {
    cy.get('#filter-btn-3').click();
    cy.get('[data-test-id="menu-item-shakes"]').should("exist")
    cy.get('[data-test-id="menu-item-lunch"]').should("not.exist")
    cy.get('[data-test-id="menu-item-breakfast"]').should("not.exist")

  });

  it('All displayed items should belong to category Lunch', () => {
    cy.get('#filter-btn-2').click();
    cy.get('[data-test-id="menu-item-lunch"]').should("exist")
    cy.get('[data-test-id="menu-item-shakes"]').should("not.exist")
    cy.get('[data-test-id="menu-item-breakfast"]').should("not.exist")

  });

  it('All displayed items should belong to category Breakfast', () => {
    cy.get('#filter-btn-1').click();
    cy.get('[data-test-id="menu-item-breakfast"]').should("exist")
    cy.get('[data-test-id="menu-item-lunch"]').should("not.exist")
    cy.get('[data-test-id="menu-item-shakes"]').should("not.exist")

  });
});

