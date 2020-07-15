/// <reference types="cypress" />

describe("TEST", function() {
    it("OPIS1", function() {
        // wynik negatywny
        expect(true).to.equal(false)
    }),

    it("OPIS2", function() {
        // wynik pozytywny
        expect(true).to.equal(true)
    })
})