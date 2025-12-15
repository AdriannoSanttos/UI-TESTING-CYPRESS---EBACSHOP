/// <reference types="cypress" />

const loginPage = require("../support/pages/login.page")
const { email, senha } = require('../fixtures/data.json')

describe('Teste de Autenticação - V1', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.visit('/my-account/', {
      onBeforeLoad(win) {
        win.document.cookie = 'ebacStoreVersion=v1; path=/'
      }
    })
  })

  it('deve fazer o login com sucesso', () => {
    loginPage.login(email, senha)

    cy.url().should('include', '/my-account')
    cy.contains('Olá').should('be.visible')
  })
})
