class cartPage {
    elements = {
        removeSecondProduct: () => cy.get('button[name="remove-test.allthethings()-t-shirt-(red)"'),
        checkOut : () => cy.get('button[name ="checkout"'),
    }

    clickRemoveSecondProduct(){
        this.elements.removeSecondProduct().click();
    }

    clickcheckOut(){
        this.elements.checkOut().click();
    }
}

module.exports = new cartPage();