/// <reference types="cypress" />

export const homePage = {
  abrirHome() {
    cy.get("[href='http://lojaebac.ebaconline.art.br']").click()
  },

  selecionarProduto(idProduto, indice = 0) {
    cy.get(`[data-product-id='${idProduto}']`)
      .eq(indice)
      .should('be.visible')
      .click()
  }

}
