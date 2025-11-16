/// <reference types="cypress" />

import { cadastroPage } from '../support/pages/cadastro.page'
import { homePage } from '../support/pages/home.page'
import produtoPage from '../support/pages/produto.page'
import CarrinhoPage from '../support/pages/carrinho.page'
import CheckoutPage from '../support/pages/checkout.page'
import '../support/commands'

describe('Fluxo completo: Cadastro, Carrinho e Checkout - Web', () => {

    it('Deve cadastrar usuário, adicionar produto ao carrinho e finalizar compra', () => {
        
        cadastroPage.abrirTela()

        const dados = cadastroPage.gerarDados()
    
        cadastroPage.cadastrar(dados.email, dados.password)

        homePage.abrirHome()

        homePage.selecionarProduto(4104, 0)

        produtoPage.selecionarTamanho('XS')
        produtoPage.selecionarCor('White')
        produtoPage.adicionarAoCarrinho()
        produtoPage.validarMensagemCarrinho('Ingrid Running Jacket', 1)
 /
        CarrinhoPage.verCarrinho()
        CarrinhoPage.validarProdutoCarrinho('Ingrid Running Jacket - XS, White')
        CarrinhoPage.concluirCompra()

        CheckoutPage.preencherCheckout({
            nome: 'Jose',
            sobrenome: 'Santos',
            endereco: 'Rua Exemplo, 123',
            cidade: 'São Paulo',
            cep: '01234-567',
            telefone: '11999999999',
            email: dados.email 
        })

        CheckoutPage.selecionarPagamentoNaEntrega()
        CheckoutPage.aceitarTermosPrivacidade()

        CheckoutPage.finalizarPedido()
        CheckoutPage.validarPedidoRecebido()
    })
})

