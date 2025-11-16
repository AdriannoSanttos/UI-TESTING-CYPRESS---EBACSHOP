
Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('[data-testid="email"]').type(usuario)
    cy.get('[data-testid="password"]').type(senha)
    cy.get('[data-testid="btnLogin"]').click()
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').clear().type(usuario)
    cy.get('.woocommerce-Button').click()
})

