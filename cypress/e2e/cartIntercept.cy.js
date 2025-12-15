/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const loginPage = require('../support/pages/login.page')
const { homePage } = require('../support/pages/home.page')
const produtoPage = require('../support/pages/produto.page')
const CarrinhoPage = require('../support/pages/carrinho.page')

describe('Carrinho - Intercept API (V1)', () => {

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

  it('Deve adicionar produto ao carrinho validando a API com intercept', () => {
    
    const idProduto = 4104
    const nomeProduto = 'Ingrid Running Jacket'

    homePage.selecionarProduto(idProduto)

    produtoPage.selecionarTamanho('XS')
    produtoPage.selecionarCor('White')

    cy.intercept('POST', '**/admin-ajax.php').as('addCart')

    produtoPage.adicionarAoCarrinho()

    cy.wait('@addCart').then((intercept) => {
      expect(intercept.response.statusCode).to.eq(200)
      expect(intercept.response.body).to.exist
    })

    produtoPage.validarMensagemCarrinho(nomeProduto)

    CarrinhoPage.verCarrinho()
    CarrinhoPage.validarProdutoCarrinho('Ingrid Running Jacket - XS, White')
  })
})
