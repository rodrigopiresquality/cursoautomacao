import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import signup from "../pages/signup"
import signupmultilanguage from "../pages/signupmultilanguage"


Given("I access google page", () => {
    cy.visit("https://www.google.com.br/")
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("que acesso a página Automation Exercise", () => {
    signup.homePage()
})

When("acessar a página de login", () => {
    signup.loginArea()
})

When("digitar as informações de login e senha incorretas", () => {
    signup.formEmail()
    signup.formPassword()
    signup.loginButton()
})

Then("uma mensagem de erro deve ser exibida", () => {
    cy.get('.login-form > form > p').should('have.text', "Your email or password is incorrect!")
})

And("digitar os dados de cadastro", () => {
    signup.formName()
    signup.formEmailSU()
})

And("clicar em Signup", () => {
    cy.get('[data-qa="signup-button"]').click()
})

Then("devo digitar os dados de cadastro", () => {
    cy.get(':nth-child(1) > b').should('have.text', "Enter Account Information")
    signup.radioMr()
    signup.formAccPassword()
    signup.dayOfBirth()
    signup.monthOfBirth()
    signup.yearOfBirth()
    signup.checkNews()
    signup.checkOffers()
    signup.formFirstName()
    signup.formLastName()
    signup.formCompany()
    signup.formAdress()
    signup.formAdress2()
    signup.country()
    signup.formState()
    signup.formCity()
    signup.formZipcode()
    signup.formMobileNumber()
})

Then("devo digitar os dados de cadastro de acordo com o País de origem", () => {
    cy.get(':nth-child(1) > b').should('have.text', "Enter Account Information")
    signupmultilanguage.radioMr()
    signupmultilanguage.formAccPassword()
    signupmultilanguage.dayOfBirth()
    signupmultilanguage.monthOfBirth()
    signupmultilanguage.yearOfBirth()
    signupmultilanguage.checkNews()
    signupmultilanguage.checkOffers()
    signupmultilanguage.formFirstName()
    signupmultilanguage.formLastName()
    signupmultilanguage.formCompany()
    signupmultilanguage.formAdress()
    signupmultilanguage.formAdress2()
    signupmultilanguage.country()
    signupmultilanguage.formState()
    signupmultilanguage.formCity()
    signupmultilanguage.formZipcode()
    signupmultilanguage.formMobileNumber()
})