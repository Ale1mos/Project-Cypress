class checkOutCompletePage {
    elements = {
        backToHomeBtn : () => cy.get('button[name ="back-to-products"]')
    }

    clickBackToHome(){
        this.elements.backToHomeBtn().click();
    }
}

module.exports = new checkOutCompletePage();