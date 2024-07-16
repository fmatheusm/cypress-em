/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

describe('tarefas', () => {
    it('deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080/');
        cy.get('input[placeholder="Add a new Task"]').type(faker.music.genre());

        cy.intercept('POST', '**/tasks').as('postTask');
        cy.contains('button', 'Create').click();

        cy.wait('@postTask').then(xhr => {
            expect(xhr.response.statusCode).to.eq(201)
        });

    });
});