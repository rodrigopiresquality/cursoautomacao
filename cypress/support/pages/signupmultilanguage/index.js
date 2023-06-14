/// <reference types="Cypress" />

const elSignUpMultilanguage = require('./elements').ELEMENTS

class signUpMultilanguage {
    radioMr() {
        cy.get(elSignUpMultilanguage.mr).click()
    }
    formAccPassword() {
        cy.get(elSignUpMultilanguage.password).type('12345', {log:false})
    }
    dayOfBirth() {
        cy.get(elSignUpMultilanguage.day).select('26')
    }
    monthOfBirth() {
        cy.get(elSignUpMultilanguage.month).select('March')
    }
    yearOfBirth() {
        cy.get(elSignUpMultilanguage.year).select('1982')
    }
    checkNews() {
        cy.get(elSignUpMultilanguage.news).click()
    }
    checkOffers() {
        cy.get(elSignUpMultilanguage.offers).click()
    }
    formFirstName() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.firstName).type('Testing')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.firstName).type('Pruebas')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.firstName).type('Testando')
        }        
    }
    formLastName() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.lastName).type('Test')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.lastName).type('Prueba')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.lastName).type('Teste')
        }
    }
    formCompany() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.company).type('QA Startup')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.company).type('QA Startup')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.company).type('QA Startup')
        }
    }
    formAdress() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.adress).type('Test street, 10')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.adress).type('Prueba calle, 10')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.adress).type('Rua dos testes, 10')
        }
    }
    formAdress2() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.adress2).type('block 5 room 20')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.adress2).type('bloque 5 sala 20')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.adress2).type('bloco 5 sala 20')
        }
    }
    country() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.country).select('Israel')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.country).select('Israel')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.country).select('Israel')
        }
    }
    formState() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.state).type('Tel Aviv')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.state).type('Tel Aviv')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.state).type('Tel Aviv')
        }
    }
    formCity() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.city).type('Yehuda Hamaccabi')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.city).type('Yehuda Hamaccabi')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.city).type('Yehuda Hamaccabi')
        }
    }
    formZipcode() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.zipcode).type('12345-678')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.zipcode).type('12345-678')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.zipcode).type('12345-678')
        }
        
    }
    formMobileNumber() {
        if (Cypress.env('country') === "US" ) {
            cy.get(elSignUpMultilanguage.mobileNumber).type('99999-9999')
        } if (Cypress.env('country') === "ES" ) {
            cy.get(elSignUpMultilanguage.mobileNumber).type('99999-9999')
        } else if (Cypress.env('country') === "BR" ) {
            cy.get(elSignUpMultilanguage.mobileNumber).type('99999-9999')
        }
    }
}
export default new signUpMultilanguage()