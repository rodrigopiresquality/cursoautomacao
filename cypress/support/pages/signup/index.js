/// <reference types="Cypress" />

const elSignUp = require('./elements').ELEMENTS

class signUp {
    homePage() {
        cy.visit(elSignUp.page)
    }
    loginArea() {
        cy.get(elSignUp.loginPage).click()
    }
    formEmail() {
        cy.get(elSignUp.emailInput).type("rodrigo.pires@quality.com.br")
    }
    formEmailSU() {
        cy.get(elSignUp.emailSuInput).type("rodrigo.pires@quality.com.br")
    }
    formPassword() {
        cy.get(elSignUp.passwordInput).type("12345", {log:false})
    }
    formName() {
        cy.get(elSignUp.nameInput).type("Rodrigo Pires")
    }
    loginButton() {
        cy.get(elSignUp.iconButton).click()
    }
    radioMr() {
        cy.get(elSignUp.mr).click()
    }
    formAccPassword() {
        cy.get(elSignUp.password).type('12345', {log:false})
    }
    dayOfBirth() {
        cy.get(elSignUp.day).select('26')
    }
    monthOfBirth() {
        cy.get(elSignUp.month).select('March')
    }
    yearOfBirth() {
        cy.get(elSignUp.year).select('1982')
    }
    checkNews() {
        cy.get(elSignUp.news).click()
    }
    checkOffers() {
        cy.get(elSignUp.offers).click()
    }
    formFirstName() {
        cy.get(elSignUp.firstName).type('Testando')
    }
    formLastName() {
        cy.get(elSignUp.lastName).type('Teste')
    }
    formCompany() {
        cy.get(elSignUp.company).type('QA Startup')
    }
    formAdress() {
        cy.get(elSignUp.adress).type('Rua dos testes, 10')
    }
    formAdress2() {
        cy.get(elSignUp.adress2).type('bloco 5 sala 20')
    }
    country() {
        cy.get(elSignUp.country).select('Israel')
    }
    formState() {
        cy.get(elSignUp.state).type('Quality Assurance')
    }
    formCity() {
        cy.get(elSignUp.city).type('QA Land')
    }
    formZipcode() {
        cy.get(elSignUp.zipcode).type('12345-678')
    }
    formMobileNumber() {
        cy.get(elSignUp.mobileNumber).type('99999-9999')
    }
}
export default new signUp()