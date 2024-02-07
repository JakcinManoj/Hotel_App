require('Cypress-xpath')

it('should show error messages for invalid login attempt', () => {
    cy.visit('http://localhost:9000/login');
    cy.get('input[name="email"]').type('invalidemail@example.com');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.noty_body').should('contain', 'Invalid Credentials, please try again!');
});
