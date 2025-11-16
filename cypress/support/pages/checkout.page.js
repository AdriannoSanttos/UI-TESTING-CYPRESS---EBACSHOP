/// <reference types="cypress" />

class CheckoutPage {
    preencherCheckout({ nome, sobrenome, endereco, cidade, cep, telefone, email }) {
        cy.get("[name='billing_first_name']").clear().type(nome)
        cy.get("[name='billing_last_name']").clear().type(sobrenome)
        cy.get("[name='billing_address_1']").clear().type(endereco)
        cy.get("[name='billing_city']").clear().type(cidade)
        cy.get("[autocomplete='postal-code']").clear().type(cep)
        cy.get("[type='tel']").clear().type(telefone)
        cy.get("#billing_email").clear().type(email)
    }

    selecionarPagamentoNaEntrega() {
        cy.get("[for='payment_method_cod']").click()
    }

    aceitarTermosPrivacidade() {
        cy.get("#terms").check({ force: true })
    }

    finalizarPedido() {
        cy.get("[value='Finalizar compra']").click()
    }

    validarPedidoRecebido() {
        cy.get('.page-title').should('contain.text', 'Pedido recebido')
    }
}

export default new CheckoutPage()



