/// <reference types="cypress" />

describe("TEST", function() {
    it("OPIS", function() {

        // odwiedzamy stronę
        cy.visit("https://www.santander.pl/klient-indywidualny/kredyty/kredyt-gotowkowy")

        // sprawdzamy tytuł nowo wczytanej strony
        .title().should("equal", "Kredyt gotówkowy, pożyczka gotówkowa | Santander Bank Polska (dawniej BZWBK)")

        // ustawiamy kwotę kredytu
        .get("input.amount_value").type("20000")

        // ustawiamy ilość rat
        .get("input.installments_value").type("64")

        // dorzucamy ubezpieczenie kredytu
        .get("input.insurance-checkbox").check({force: true})

        // rozwijamy szczegóły kredytu
        .get(".calculator_details_opener__label").click()
        
        // sprawdzamy prowizję
        .get(".calculator_commission").within(() => {
            cy.get(".rate").within((commission) => {
                expect(commission.text()).to.equal("3,99 %") //UWAGA: na stronie jest inny rodzaj spacji (U+202F)
            })
        })

        // sprawdzamy oprocentowanie
        .get(".calculator_interest").within(() => {
            cy.get(".value").within((interest) => {
                expect(interest.text()).to.equal("7,20 %") //UWAGA: na stronie jest inny rodzaj spacji (U+202F)
            })
        })

        // bierzemy kredyt :)
        .get("#btn1").click()
    })
})