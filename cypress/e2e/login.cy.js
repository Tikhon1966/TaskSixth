describe('login page', () => {
  it('should login with valid email and password', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Log in').click()
    cy.get('#mail').type('test@test.com')
    cy.get('#pass').type('test')
    
    cy.contains('Submit').click()

    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })
})