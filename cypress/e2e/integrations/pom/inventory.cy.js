// import { describe } from "mocha";
import homeSaucePage from "../../saucedemo/homeSaucePage";
import inventoryPage from "../../saucedemo/inventoryPage";
import cartPage from "../../saucedemo/cartPage";
import checkOutStepOnePage from "../../saucedemo/checkOutStepOnePage";
import checkOutStepTwoPage from "../../saucedemo/checkOutStepTwoPage";
import checkOutCompletePage from "../../saucedemo/checkOutCompletePage";

// describe('POM Implementation' , () => {
//     beforeEach(()=>{
//         cy.visit('https://www.saucedemo.com/')
//     })

//     it('shoul login to inventory page',() =>{
//         homeSaucePage.typeUsername('standard_user')
//         homeSaucePage.typePassword('secret_sauce')
//         homeSaucePage.clickLogin();
        
//         // cy.log('1a')

//         inventoryPage.elements.titleSpan().should('have.text', 'Products')
//         inventoryPage.clickAddProduct();
//         cy.scrollTo('bottom')
//         inventoryPage.clickAddSecondProduct();
//         cy.scrollTo('top')
//         inventoryPage.clickGoToCart();
//         cartPage.clickRemoveSecondProduct();
//         cartPage.clickcheckOut();
//         checkOutStepOnePage.fillFirstName('Alejandra');
//         checkOutStepOnePage.fillLastName('Mosqueira');
//         checkOutStepOnePage.fillPostalCode('1');
//         checkOutStepOnePage.clickContinue();
//         // checkStepTwo
//         cy.scrollTo('bottom')
//         checkOutStepTwoPage.clickFinish();
//         // checkComplete
//         checkOutCompletePage.clickBackToHome();
//     })

// })

// describe('POM Implementation' , () => {
//     beforeEach(()=>{
//         cy.visit('https://www.saucedemo.com/')
//     })
//     // cy.log('1a')

//     it('should login to inventory page',() =>{
//         homeSaucePage.typeUsername('standard_user')
//         homeSaucePage.typePassword('secret_sauce')
//         homeSaucePage.clickLogin();
        
//         // cy.log('1a')

//         inventoryPage.elements.titleSpan().should('have.text', 'Products')
//     })

//     it('should display locked out message',()=>{
//         homeSaucePage.typeUsername('locked_out_user')
//         homeSaucePage.typePassword('secret_sauce')
//         homeSaucePage.clickLogin();
        
//         // cy.log('1a')

//         homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
//     })

//     it('should display incorrect username message',()=>{
//         homeSaucePage.typeUsername('incorrectUser')
//         homeSaucePage.typePassword('secret_sauce')
//         homeSaucePage.clickLogin();
        
//         // cy.log('1a')

//         homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

//     })

//     it('should display incorrect password message',()=>{
//         homeSaucePage.typeUsername('standard_user')
//         homeSaucePage.typePassword('incorrectPassword')
//         homeSaucePage.clickLogin();
        
//         // cy.log('1a')

//         homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
//     })

// })

describe('Inventory' , () => {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
    })

    it('validate phatname',()=>{
        cy.location('pathname').should('equal','/inventory.html')
    })

    it('check contents',() =>{
        inventoryPage.elements.burgerBtn().should('be.visible')
        inventoryPage.elements.cartBtn().should('be.visible')
        cy.get(".bm-menu-wrap").find('a').eq(0).should('have.text','All Items')
        cy.get(".bm-menu-wrap").find('a').eq(1).should('have.text','About')
        cy.get(".bm-menu-wrap").find('a').eq(2).should('have.text','Logout')
        cy.get(".bm-menu-wrap").find('a').eq(3).should('have.text','Reset App State')
    })

    it('add and remove products',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.scrollTo('bottom')
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.scrollTo('top')
        cy.get('.shopping_cart_link').should('contain','2')
        cy.scrollTo('bottom')
        cy.get('#inventory_container').find('button').last().click()
        cy.scrollTo('top')
        cy.get('.shopping_cart_link').should('contain','1')
    })
})

// describe('Cart' , () => {
//     beforeEach(()=>{
//         cy.visit('https://www.saucedemo.com/')
//         homeSaucePage.typeUsername('standard_user')
//         homeSaucePage.typePassword('secret_sauce')
//         homeSaucePage.clickLogin();
//         inventoryPage.clickAddProduct();
//         cy.scrollTo('bottom')
//         inventoryPage.clickAddSecondProduct();
//         inventoryPage.clickGoToCart();
//     })

//     it('validate phatname',()=>{
//         cy.location('pathname').should('equal','/cart.html')
//     })

//     it('check contents',() =>{
//         cy.get('.shopping_cart_badge').should('contain','2')
//         cy.get('.cart_list').find('.cart_item').should('have.length',2)
//         cy.get('.cart_footer').find('button').should('have.length',2)
//         cy.get('.cart_footer').find('button').eq(0).should('have.text','Continue Shopping')
//         cy.get('.cart_footer').find('button').eq(1).should('have.text','Checkout')
//     })

//     it('remove product',() =>{
//         cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
//         cy.get('.cart_list').find('.cart_item').should('have.length',1)
//         cy.get('.inventory_item_name').should('have.text','Sauce Labs Backpack')
//     })
// })

// describe('checkout step one' , () => {

//     beforeEach(()=>{
//         cy.visit('https://www.saucedemo.com/')
//         homeSaucePage.typeUsername('standard_user')
//         homeSaucePage.typePassword('secret_sauce')
//         homeSaucePage.clickLogin();
//         inventoryPage.clickAddProduct();
//         inventoryPage.clickGoToCart();
//         cartPage.clickcheckOut();
//     })

//     it('validate phatname',()=>{
//         cy.location('pathname').should('equal','/checkout-step-one.html')
//     })

//     it('check contents',() =>{
//         cy.get("#react-burger-menu-btn").should('be.visible')
//         cy.get("#shopping_cart_container").should('be.visible')
//     })

//     it('fill information',() =>{
//         cy.get("#react-burger-menu-btn").should('be.visible')
//         cy.get("#shopping_cart_container").should('be.visible')
//         checkOutStepOnePage.fillFirstName('Alejandra');
//         checkOutStepOnePage.fillLastName('Mosqueira');
//         checkOutStepOnePage.fillPostalCode('1');
//     })
// })