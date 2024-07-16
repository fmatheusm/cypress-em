/// <reference types="Cypress" />

describe('tarefas', () => {
    it('deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080/');
        cy.get('input[placeholder="Add a new Task"]').type('hello world')
        cy.contains('button', 'Create').click()
    });
});