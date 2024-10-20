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
        cy.xpath('//div[text()="GREEN"]').should('be.visible');
    })

    it.skip('my second test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // Parent to child trasion of locator
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    })

    it.skip('my third test case', function(){
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
       cy.get('.search-keyword').type('ca');
       cy.wait(2000);
       //Without hard coding finding an element with text
       cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            //cy.log(textVeg)
            if(textVeg.includes('Cashews'))
            {
                // In latest version of cypress without resovling promice .click() is depricated
                //$el.find('button').click(); 
                cy.wrap($el).find('button').click();
            }
        })
    })
    
    it.skip('my fourth test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        // Follwoing two lines will make the cypress internal promice structue break, which break the execution
        //const logo = cy.get('.brand');
        //cy.log(logo.text());

        // to handle the promice manually following code is needed
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })
    })

    it.skip('my fifth test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // Parent to child trasion of locator
        cy.get('.products').as('prodctsLocator');
        cy.get('@prodctsLocator').find('.product').should('have.length',4);
    })

    it.skip('my sixth test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // Below command is from cypress it resolves promice internally and run code sequetially
        cy.log('typed ca in Search');
    })

    it.skip('my seventh test case', function() {
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        // cy.get('.search-keyword').type('ca');
        // cy.wait(2000);
        // Below command is not from cypress form java script it not resolves promice internally
        // and it will run directly just before launching URL so it needs to handeled manually
        //console.log('typed ca in Search')
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca').then(function(){
            console.log('typed ca in Search')
        })
        cy.wait(2000);
    })

    it.skip('my eighth test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        // Follwoing two lines will make the cypress internal promice structue break, which break the execution
        //const logo = cy.get('.brand');
        //cy.log(logo.text());

        // To Print on test runner logs
        // to handle the promice manually following code is needed
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })

        cy.get('.brand').should('have.text','GREENKART');
    })
})