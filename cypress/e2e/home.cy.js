/// <reference types="Cypress" />
describe('home', () => {
    it('web app deve estar online', () => {

        cy.visit('http://localhost:8080/');
        cy.title().should('eq', 'Gerencie suas tarefas com Mark L')

        cy.intercept('GET', '**/tasks').as('getTask');

        cy.wait('@getTask').then(xhr => {
            cy.log(xhr.response.statusCode)
            expect(xhr.response.statusCode === 200 || 304 ? true : false).is.true
        });
    });
});