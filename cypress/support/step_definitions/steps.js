import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/")
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})


Given("que acesso a página Automation Exercise", () => {
    cy.visit("https://automationexercise.com/")
})

When("acessar a página de login", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

When("digitar as informações de login e senha incorretas", () => {
    cy.get('[data-qa="login-email"]').type("rodrigo.pires@quality.com.br")
    cy.get('[data-qa="login-password"]').type("12345")
    cy.get('[data-qa="login-button"]').click()
})

Then("uma mensagem de erro deve ser exibida", () => {
    cy.get('.login-form > form > p').should('have.text', "Your email or password is incorrect!")
})