/// <reference types='Cypress' />

describe('End to end Scenario', function() {

    it('end to end test 1', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca');

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const prodName  = $el.find('h4.product-name').text();
            if(prodName.includes('Capsicum'))
            {
                cy.get('button').contains('ADD TO CART').click();
            }
        })
        cy.get('img[alt="Cart"]').click();
        cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})