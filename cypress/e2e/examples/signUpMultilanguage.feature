Feature: Preencher inputs da página de login de acordo com o País de origem

    Scenario: Digitando dados de login de acordo com o País de origem
        Given que acesso a página Automation Exercise
        When acessar a página de login
        And digitar os dados de cadastro
        And clicar em Signup
        Then devo digitar os dados de cadastro de acordo com o País de origem