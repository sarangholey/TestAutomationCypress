/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
import 'cypress-iframe';

describe('Test Framework on Angular App', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })


    it('Framework Testcase 1 -  Data Comparison', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        //cy.get('input[name="name"]:nth-child(2)').type('Bob');
        cy.get('input[name="name"]:nth-child(2)').type(this.data.nametext);
        cy.get('select').select(this.data.gender);
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.nametext);
        // or
        cy.get('input[name="name"]:nth-child(1)').each(($el, index, $list) => {
            const textValue = $el.text();

            textValue.includes(this.data.nametext);
        })

        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        // or
        // cy.get('input[name="name"]:nth-child(2)').then(function(el) {
        //     const attribute = el.prop('minlength');
        //     cy.log(attribute)
        //     //Number(attribute);
        //     expect(attribute).to.equal('25');
        // })

        // Handle Disable elements
        cy.get('#inlineRadio3').should('be.disabled');

    })

    it('Framework Testcase 2 - Buidling a function', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('h4.card-title').each(($el, index, $list) => {

            if ($el.text().includes('Blackberry')) {
                cy.get('button.btn.btn-info').eq(index).click({ force: true });
            }

        })

        // OR

        cy.SelectProduct('Nokia Edge');
        //cy.pause();
        cy.SelectProduct('Blackberry');
        // OR 

        // this.data.productNameList.forEach(function () {
        //     cy.SelectProduct(element);
        // });
        //or
        // this.data.productNameList.forEach(element => {
        //     cy.SelectProduct(element);
        // });

    })


})