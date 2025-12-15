/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const loginPage = require('../support/pages/login.page')
const { homePage } = require('../support/pages/home.page')
const produtoPage = require('../support/pages/produto.page')
const CarrinhoPage = require('../support/pages/carrinho.page')

describe('Carrinho - Remove Item com Intercept API (V1)', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.visit('/my-account/', {
      onBeforeLoad(win) {
        win.document.cookie = 'ebacStoreVersion=v1; path=/'
      }
    })

    loginPage.login(email, senha)
    homePage.abrirHome()
  })

  it('Deve remover produto do carrinho validando a API com intercept', () => {

    const idProduto = 4104
    const nomeProduto = 'Ingrid Running Jacket'

    homePage.selecionarProduto(idProduto)

    produtoPage.selecionarTamanho('XS')
    produtoPage.selecionarCor('White')

    cy.intercept('POST', '**/admin-ajax.php').as('addCart')

    produtoPage.adicionarAoCarrinho()

    cy.wait('@addCart')
      .its('response.statusCode')
      .should('eq', 200)

    produtoPage.validarMensagemCarrinho(nomeProduto)

    CarrinhoPage.verCarrinho()
    CarrinhoPage.validarProdutoCarrinho('Ingrid Running Jacket - XS, White')

    cy.intercept('GET', '**/carrinho/?remove_item=*').as('removeItem')

    cy.get('form.woocommerce-cart-form')
      .find('a.remove')
      .first()
      .click({ force: true })

    cy.wait('@removeItem')
      .its('response.statusCode')
      .should('be.oneOf', [200, 302])

    cy.contains('Seu carrinho está vazio').should('be.visible')
  })
})
