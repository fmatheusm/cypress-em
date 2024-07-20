/// <reference types="Cypress" />


describe('tarefas', () => {
    it('deve cadastrar uma nova tarefa', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3333/helper/tasks',
            body: {
                name: 'Ler um livro de Node.js'
            }
        }).then(response => {
            expect(response.status).to.eq(204);
        });


        cy.visit('http://localhost:8080/');
        cy.get('input[placeholder="Add a new Task"]').type('Ler um livro de Node.js');

        cy.intercept('POST', '**/tasks').as('postTask');
        cy.contains('button', 'Create').click();

        cy.wait('@postTask').then(xhr => {
            expect(xhr.response.statusCode).to.eq(201)
        });

        cy.contains('main div p', 'Ler um livro de Node.js')
            .should('be.visible');

    });
});