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

describe('POM Implementation' , () => {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('should login to inventory page',() =>{
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
    })
})

describe('Inventory' , () => {
    const elements={
        // BURGER_BUTTON: '#react-burger-menu-btn',
        BURGER_MENU: '.bm-menu-wrap',
        BURGER_MENU_ALL_ITEMS: '#inventory_sidebar_link',
        BURGER_MENU_ABOUT: '#about_sidebar_link',
        BURGER_MENU_LOGOUT: '#logout_sidebar_link',
        BURGER_MENU_RESET_APP_STATE: '#reset_sidebar_link',
        CART: '#shopping_cart_container',
    }
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        // inventoryPage.clickAddProduct();
        // inventoryPage.clickAddSecondProduct();
        // inventoryPage.clickGoToCart();
    })

    it('check contents',() =>{
        // cy.get(elements.BURGER_BUTTON).should('be.visible')
        // inventoryPage.elements.burgerBtn().should('be.visible')
        cy.get("#react-burger-menu-btn").should('be.visible')
        cy.get("#shopping_cart_container").should('be.visible')
        cy.get(".bm-menu-wrap").find('a').eq(0).should('have.text','All Items')
        cy.get(".bm-menu-wrap").find('a').eq(1).should('have.text','About')
        cy.get(".bm-menu-wrap").find('a').eq(2).should('have.text','Logout')
        cy.get(".bm-menu-wrap").find('a').eq(3).should('have.text','Reset App State')
    })
})

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

    it('check contents',() =>{
        cy.get('.shopping_cart_badge').should('contain','2')
        cy.get('.cart_footer').find('button').should('have.length',2)
        cy.get('.cart_footer').find('button').eq(0).should('have.text','Continue Shopping')
        cy.get('.cart_footer').find('button').eq(0).should('have.text','Checkout')

    })
})