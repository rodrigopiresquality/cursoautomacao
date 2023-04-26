Feature: Login inválido

    Scenario: Efetuando login com dados incorretos
        Given que acesso a página Automation Exercise
        When acessar a página de login
        When digitar as informações de login e senha incorretas
        Then uma mensagem de erro deve ser exibida