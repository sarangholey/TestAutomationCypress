/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
import 'cypress-iframe';

describe('Various Properties through Cypress - 3', function () {

    it.skip('child window handling', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').then(function (el) {

            const url = el.prop('href');
            cy.visit(url);

            cy.origin(url, () => {
                cy.get('#navbarSupportedContent a[href="about.html"]').click();
                cy.get('.mt-50 h2').contains('Welcome to QAClick Academy ');
            })

        })
    })

    it('frame handling in cypress', function() {
        // To handle frames in Cypress you need to install iframe plugin
        // npm install -D cypress-iframe
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.frameLoaded('#courses-iframe');

        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        cy.iframe().find('div h1[class*="pricing-title"]').should('have.length',2);
    })

    it('calendar handling sceario', ()=> {
        const monthNumber = '6';
        const date = '15';
        const year = '2027';
        const expectedList = [monthNumber,date,year];

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputGroup').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.contains('button',year).click();
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click();
        cy.contains('abbr',date).click();
        
        // assertion
        cy.get('.react-date-picker__inputGroup__input').each(($el,index)=> {

            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        })


    })
})