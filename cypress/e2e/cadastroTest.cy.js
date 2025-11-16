/// <reference types="cypress" />
import { cadastroPage } from '../support/pages/cadastro.page'

describe('Cadastro na versão web - EBAC Shop', () => {

    it('Deve cadastrar um novo usuário com Faker', () => {

        
        const dados = cadastroPage.gerarDados()

        
        cadastroPage.abrirTela()

        /
        cadastroPage.cadastrar(dados.email, dados.password)

    })
})
