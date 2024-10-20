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
        checkoutPage.checkoutPageButton().click();
        purchasePage.typeCountryName().type(this.data.CountryName);
        cy.wait(3000);
        purchasePage.suggestedCountryName().click();
        purchasePage.purchaseButtton().click();
        purchasePage.purchaseSuccessMsg().should('contain.text', "Success! Thank you! Your order will be delivered in next few weeks :-).");
    })



})