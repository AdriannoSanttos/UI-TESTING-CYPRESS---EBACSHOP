/// <reference types="cypress" />

class ProdutoPage {

    selecionarTamanho(tamanho) {
        cy.get(`[title='${tamanho}']`).click()
    }

    selecionarCor(cor) {
        cy.get(`[title='${cor}']`).click()
    }

    adicionarAoCarrinho() {
        cy.get('.single_add_to_cart_button').click()
    }

    validarMensagemCarrinho(produto) {
        cy.get('.woocommerce-message')
          .should('contain.text', produto)
          .and('contain.text', 'foi adicionado no seu carrinho')
    }
}

export default new ProdutoPage()



