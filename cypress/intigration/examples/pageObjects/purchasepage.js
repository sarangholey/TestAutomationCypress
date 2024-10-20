class PurchasePage
{
    typeCountryName()
    {
        return cy.get('#country');
    }

    suggestedCountryName()
    {
        return cy.get('div[class="suggestions"] ul li a');
    }

    purchaseButtton()
    {
        return cy.contains('Purchase');
    }

    purchaseSuccessMsg()
    {
        return cy.get('.alert.alert-success.alert-dismissible');
    }
}
export default PurchasePage;