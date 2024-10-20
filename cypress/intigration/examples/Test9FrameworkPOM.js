/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
import 'cypress-iframe';
import HomePage from '../examples/pageObjects/homepage';
import ShoppingPage from '../examples/pageObjects/shoppingpage';
import CheckoutPage from '../examples/pageObjects/checkoutpage';
import PurchasePage from '../examples/pageObjects/purchasepage';

describe('PageObjectModel', function() {

    const homePage = new HomePage();
    const shoppingPage = new ShoppingPage();
    const checkoutPage = new CheckoutPage();
    const purchasePage = new PurchasePage();

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it.skip('PageObjectModel TC1', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getEditBox().type(this.data.nametext);
        homePage.genderSelect().select(this.data.gender);
        homePage.twoWayDataBinding().should('have.value', this.data.nametext);
    })

    it('PageObjectModel TC2', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.clickOnShop().click();
        cy.SelectProduct('Nokia Edge');
        //cy.pause();
        cy.SelectProduct('Blackberry');
        shoppingPage.checkoutButton().click();

        // All Products Individual total validation with Final Checkout total value
        var sumOfAllProducts = 0;
        var totalCartTotal = 0;
        cy.get('tr td:nth-child(4) > strong').each(($el, index, $list) => {

            const amountText = $el.text();
            var amountValue = amountText.split(" ");
            amountValue = amountValue[1].trim();
            sumOfAllProducts = Number(sumOfAllProducts) + Number(amountValue);
        }).then(function() {
            cy.log(sumOfAllProducts)
        })
        
        cy.get('h3 > strong').then(function(elemnt) {
            const totalCartValue = elemnt.text();
            var totalCartTotalArr = totalCartValue.split(" ");
            // cy.log ("Test" );
            // cy.log (Number(totalCartTotalArr[1]))
            totalCartTotal = Number(totalCartTotalArr[1]);
            expect(totalCartTotal).to.be.equal(sumOfAllProducts);
        })


        checkoutPage.checkoutPageButton().click();
        purchasePage.typeCountryName().type(this.data.CountryName);
        Cypress.config('defaultCommandTimeout', 8000)
        //cy.wait(3000);
        purchasePage.suggestedCountryName().click();
        purchasePage.purchaseButtton().click();
        purchasePage.purchaseSuccessMsg().should('contain.text', "Success! Thank you! Your order will be delivered in next few weeks :-).");
        //or
        purchasePage.purchaseSuccessMsg().then(function(elemnt) {
            const actualText = elemnt.text();
            expect(actualText.includes("Success")).to.be.true
        })
    })



})