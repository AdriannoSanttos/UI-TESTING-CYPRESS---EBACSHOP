/// <reference types="cypress" />

class LoginPage {

    get email() { return cy.get('#username') } 

    get password() { return cy.get('[name="password"]').first() }

    get btnLogin() { return cy.get('[name="login"]') }

    login(email, password){
        this.email.type(email)
        this.password.type(password)
        this.btnLogin.click()
    }
}

module.exports = new LoginPage();
