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

  // ✅ Remoção segura (apenas carrinho desktop visível)
  removerProduto() {
    cy.get('form.woocommerce-cart-form')
      .find('a.remove')
      .first()
      .click()
  }
}

export default new CarrinhoPage()
