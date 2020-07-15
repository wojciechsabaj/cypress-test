/// <reference types="cypress" />

describe("TEST", function() {
    it("OPIS", function() {
        cy.request("https://reqres.in/api/users?page=1")
        .then((resp) => {
            console.log(resp)
            expect (resp.status).to.equal(200)
            expect(resp.body.page).to.equal(1)
            // expect(resp.body.perPage).to.equal(6)
            cy.wrap(resp.body.data).each((elem, index, list) => {
                console.log(elem.email)
            })
        })
    })
})