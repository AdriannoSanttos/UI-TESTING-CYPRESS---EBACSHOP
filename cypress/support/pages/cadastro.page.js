/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

class CadastroPage {

    abrirTela() {
    
        cy.visit('/my-account/')
    
        cy.get("[type='email']").should('be.visible')
    }

    
    gerarDados() {
        const email = faker.internet.email()
        const password = faker.internet.password(12, true, /[A-Za-z0-9*#@$!]/)
        return { email, password }
    }


    cadastrar(email, password) {
        cy.get("[type='email']").should('be.visible').type(email)
        cy.get("[name='password']").first().should('be.visible').type(password)
        cy.get("[value='Register']").should('be.visible').click()
    }
}

export const cadastroPage = new CadastroPage()



