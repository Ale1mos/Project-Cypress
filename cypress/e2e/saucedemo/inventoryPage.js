class inventoryPage{
    elements = {
        titleSpan : () => cy.get('.title'),
        addFirstProduct : () => cy.get('#add-to-cart-sauce-labs-backpack'),
        addSecondProduct : () => cy.get('button[name = "add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        goToCart : () => cy.get('.shopping_cart_link')
    }

    clickAddProduct(){
        this.elements.addFirstProduct().click();
    }

    clickAddSecondProduct(){
        this.elements.addSecondProduct().click();
    }

    clickGoToCart(){
        this.elements.goToCart().click();
    }
}

module.exports = new inventoryPage();