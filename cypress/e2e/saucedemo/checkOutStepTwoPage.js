class checkOutStepTwoPage {
    elements ={
        finishBtn : () => cy.get('button[name ="finish"')
    }

    clickFinish(){
        this.elements.finishBtn().click();
    }
}

module.exports = new checkOutStepTwoPage();