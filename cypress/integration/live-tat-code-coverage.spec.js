it('has a "Live TAT Code Coverage" h1', () => {
  cy.visit('/');
  cy.get('h1').should('contain', 'Live TAT Code Coverage');
})