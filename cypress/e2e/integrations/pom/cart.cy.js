import homeSaucePage from "../../saucedemo/homeSaucePage";
import inventoryPage from "../../saucedemo/inventoryPage";
import cartPage from "../../saucedemo/cartPage";

describe('Cart' , () => {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        inventoryPage.clickAddProduct();
        cy.scrollTo('bottom')
        inventoryPage.clickAddSecondProduct();
        inventoryPage.clickGoToCart();
    })

    it('validate phatname',()=>{
        cy.location('pathname').should('equal','/cart.html')
    })

    it('check contents',() =>{
        cy.get('.shopping_cart_badge').should('contain','2')
        cy.get('.cart_list').find('.cart_item').should('have.length',2)
        cy.get('.cart_footer').find('button').should('have.length',2)
        cy.get('.cart_footer').find('button').eq(0).should('have.text','Continue Shopping')
        cy.get('.cart_footer').find('button').eq(1).should('have.text','Checkout')
    })

    it('remove product',() =>{
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('.cart_list').find('.cart_item').should('have.length',1)
        cy.get('.inventory_item_name').should('have.text','Sauce Labs Backpack')
    })
})