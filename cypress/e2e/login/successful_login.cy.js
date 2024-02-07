require('Cypress-xpath')
  it('successful login', () => {
    cy.visit('http://localhost:9000/login');
    cy.get('input[name="email"]').type('test2@gmail.com');
    cy.get('input[name="password"]').type('Test123*');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
  });

