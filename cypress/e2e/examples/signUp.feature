Feature: Preencher inputs da página de login

    Scenario: Digitando dados de login
        Given que acesso a página Automation Exercise
        When acessar a página de login
        And digitar os dados de cadastro
        And clicar em Signup
        Then devo digitar os dados de cadastro