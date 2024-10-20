class HomePage {

     getEditBox()
     {
        return cy.get('input[name="name"]:nth-child(2)');
     }

     genderSelect()
     {
        return cy.get('select');
     }

     twoWayDataBinding()
     {
        return cy.get('input[name="name"]:nth-child(1)')
     }

     clickOnShop()
     {
        return cy.get(':nth-child(2) > .nav-link');
     }
}
export default HomePage;
