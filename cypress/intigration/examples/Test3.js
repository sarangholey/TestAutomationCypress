/// <reference types='Cypress' />

describe('Various Properties through Cypress', function() {

    it('Check box validation', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
    })

    it('dropdown handling', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Static Dropdown - Select Tag Name Type
        cy.get('select').select('option2').should('have.value','option2');

        // Dynamic Dropdown - 
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($el,index,$list) =>{

            if($el.text() === "India")
            {
                $el.click();
            }

        })
        cy.get('#autocomplete').should('have.value','India');
    })

    it('Visible and Invisible Element', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    })

    it('Radio Button Handling', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[value="radio2"]').check().should('be.checked').and('have.value','radio2');
    })

})