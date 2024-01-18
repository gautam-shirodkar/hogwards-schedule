describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="app-heading"]').should('exist');
    cy.contains('[data-cy="app-heading"]', "Hogwarts School of Witchcraft and Wizardry");
  })
})