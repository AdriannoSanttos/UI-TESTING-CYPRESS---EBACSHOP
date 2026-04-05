# 🧪 UI Testing com Cypress – EBAC Shop

![Cypress](https://img.shields.io/badge/cypress-12.17.4-brightgreen)
![Node](https://img.shields.io/badge/node-18+-blue)

Projeto de testes automatizados de interface (UI) para o e-commerce EBAC Shop, utilizando Cypress. Os cenários cobrem fluxos críticos como login, navegação por produtos, adição ao carrinho e finalização de compra.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

    # Clone o repositório
    git clone https://github.com/AdriannoSanttos/UI-TESTING-CYPRESS---EBACSHOP.git

    # Acesse a pasta do projeto
    cd UI-TESTING-CYPRESS---EBACSHOP

    # Instale as dependências
    npm install

    # ou
    yarn install

## ▶️ Como executar os testes

### Modo interativo (com o Cypress Test Runner)

    npx cypress open

### Modo headless (sem interface)

    npx cypress run

### Executar um arquivo específico

    npx cypress run --spec "cypress/e2e/nome-do-arquivo.cy.js"

## 📁 Estrutura do projeto

    📦 UI-TESTING-CYPRESS---EBACSHOP
    ┣ 📂 cypress
    ┃ ┣ 📂 downloads
    ┃ ┣ 📂 e2e              # Cenários de teste
    ┃ ┣ 📂 fixtures         # Dados estáticos (ex: usuarios.json)
    ┃ ┣ 📂 support
    ┃ ┃ ┣ 📂 commands
    ┃ ┃ ┣ 📂 page_objects
    ┃ ┃ ┣ 📜 e2e.js
    ┃ ┃ ┗ 📜 commands.js
    ┣ 📜 cypress.config.js
    ┣ 📜 package.json
    ┗ 📜 README.md

## 🧠 Cenários de teste contemplados

| Módulo   | Funcionalidade testada |
|----------|------------------------|
| Login    | Acesso com credenciais válidas/inválidas |
| Produtos | Busca, filtros e abertura da página de detalhes |
| Carrinho | Adicionar/remover itens, validar quantidades |
| Checkout | Preenchimento de endereço e confirmação de pedido |
| Logout   | Encerramento da sessão |

## 🛠️ Tecnologias utilizadas

- Cypress
- JavaScript (ES6+)
- Cypress-iframe (se houver iframes)
- Mochawesome (para relatórios)

## 📊 Relatórios

    npx cypress run --reporter mochawesome

Os relatórios ficam em `mochawesome-report/`.

## 🤝 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch

    git checkout -b feature/nova-feature

3. Commit suas alterações
4. Push para a branch
5. Abra um Pull Request

## 📝 Melhorias futuras

- Integração com GitHub Actions (CI/CD)
- Testes de API
- Gravação de vídeos apenas em falhas
- Uso de variáveis de ambiente

## 📄 Licença

MIT – consulte o arquivo LICENSE (se existir).

## ✨ Autor

Adriano Santos

![GitHub](https://img.shields.io/badge/GitHub-AdriannoSanttos-181717?logo=github)







