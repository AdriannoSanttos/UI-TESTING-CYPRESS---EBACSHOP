/// <reference types="cypress" />

class CarrinhoPage {

    verCarrinho() {
        cy.get("[tabindex='1']").click()
    }

    validarProdutoCarrinho(nomeProduto) {
        cy.get("[data-title='Product']").should('contain.text', nomeProduto)
    }

    concluirCompra() {
        cy.get('.checkout-button').click()
    }
}

export default new CarrinhoPage()

