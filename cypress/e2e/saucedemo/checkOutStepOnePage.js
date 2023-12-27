class checkOutStepOnePage {
    elements = {
        firstNameInput : () => cy.get('#first-name'),
        lastNameInput : () => cy.get('#last-name'),
        postalCodeInput : () => cy.get('#postal-code'),
        continueBtn : () => cy.get('#continue')
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
}

module.exports = new checkOutStepOnePage();