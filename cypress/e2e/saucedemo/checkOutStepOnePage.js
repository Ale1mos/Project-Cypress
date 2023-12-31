class checkOutStepOnePage {
    elements = {
        firstNameInput : () => cy.get("form").find('input').eq(0),
        lastNameInput : () => cy.get("form").find('input').eq(1),
        postalCodeInput : () => cy.get("form").find('input').eq(2),
        continueBtn : () => cy.get('#continue'),
        cancelBtn : () => cy.get('[data-test="cancel"]')
    }

    fillFirstName(firstname){
        this.elements.firstNameInput().type(firstname);
    }

    fillLastName(lastname){
        this.elements.lastNameInput().type(lastname);
    }

    fillPostalCode(postalcode){
        this.elements.postalCodeInput().type(postalcode)
    }

    clickContinue(){
        this.elements.continueBtn().click();
    }

    clickCancel(){
        this.elements.cancelBtn().click();
    }
}

module.exports = new checkOutStepOnePage();