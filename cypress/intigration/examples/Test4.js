/// <reference types='Cypress' />

describe('Various Properties through Cypress - 2', function() {

    it('Alert Handling through Cypress', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // After triggering the alters cypress automatically handles it
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        // To Fetch text of alert - having only okay button
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        // Fetch text from confimation alert - having okay and cancle button
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    })

    it('tab or new browser window handling', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('.mt-50 h2').contains('Welcome to QAClick Academy ');
        })
    })

    it('webtable handling', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#product tr td:nth-child(2)').each(($e1, index, $list) =>{
            
            const text = $e1.text();

            if(text.includes('Python'))
            {
                cy.get('#product tr td:nth-child(2)').eq(index).next().then(function(price){
                    
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })

            }
        })
    })

    it('mouse hover using cypress', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show');

        cy.contains('Top').click();
        cy.url().should('include','top');
    })

    it('hidden element handling', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //cy.get('.mouse-hover-content').invoke('show');

        cy.contains('Top').click({force : true});
        cy.url().should('include','top');
    })

})