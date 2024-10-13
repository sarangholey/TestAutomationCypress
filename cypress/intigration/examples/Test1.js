/// <reference types='Cypress' />

describe('my first Test Suite', function()
{
    it('my first test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // The just below line will get failed since there one more invisible element on the page
        //cy.get('.product').should('have.length',4);\
        // for the same csslocator:visible should be written in command
        cy.get('.product:visible').should('have.length',4);
    })
})