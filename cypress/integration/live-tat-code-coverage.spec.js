describe('Live TAT Code Coverage', () => {
  it('shows elements while interacting with them', () => {
    cy.visit('/')

    cy.contains('h1', 'Live TAT Code Coverage').should('be.visible')

    cy.contains('button', 'Start')
      .click()

    cy.get('input[type="text"]')
      .as('textField')
      .should('be.visible')
      .type('Hello world!')

    cy.contains('p', 'Hello world!')
      .should('be.visible')

    cy.get('@textField')
      .clear()
      .type('secret')

    cy.contains('p', 'Congrats, you found it!')
      .should('be.visible')

    cy.get('@textField')
      .clear()
      .type('SECRET')

    cy.contains('p', 'Congrats, you found it!')
      .should('be.visible')
  })
})