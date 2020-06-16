/// <reference types="cypress" />

describe('Pizza Form Test', () => {
  it('Form Submits Correctly', () => {
    cy.get('[data-cy="orderLink"]').click()
    cy.get('[data-cy="customer"]').type("Supreme").should("have.value", "Supreme")
    cy.get('[data-cy="size"]').select("small").should("have.value", "small")
    cy.get('[data-cy="crustTest"]').check().should('be.checked')  
    cy.get('[data-cy="saucesTest"]').check().should('be.checked')  
    cy.get('[data-cy="pepperoniTest"]').check()
    cy.get('[data-cy="sausageTest"]').check()
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cartLink"]').click()
  })
})