const pages = require('./../fixtures/main')

describe('As a user I can visit testing page', () => {
  beforeEach(() => {
    cy.visit(pages.testing)
  })
  it('can click on the first item', () => {
    cy.get('[data-test="test-item"]:first').click({ force: true })
  })
  it('can click on the first item and see the content inside', () => {
    cy.get('[data-test="test-item"]:first').click({ force: true })
    cy.get('[data-test="test-item-title"]')
  })
})
