describe('My first test', () => {
    it('Sign in testing', () => {
        cy.visit('https://react-redux.realworld.io/#/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('hello9@ukr.net');
        cy.get(':nth-child(2) > .form-control').type('9Asdfghjkl!');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').contains('Uliia9').should('exist');
    });
});
