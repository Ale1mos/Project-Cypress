import homeSaucePage from "../../saucedemo/homeSaucePage";
import inventoryPage from "../../saucedemo/inventoryPage";
import cartPage from "../../saucedemo/cartPage";
import checkOutStepOnePage from "../../saucedemo/checkOutStepOnePage";

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

//     it('should continue to checkout step two',() =>{
//         cy.get("#react-burger-menu-btn").should('be.visible')
//         cy.get("#shopping_cart_container").should('be.visible')
//         cy.location('pathname').should('equal','/inventory.html')
//     })
// })

describe('should continue to checkout step two' , () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        inventoryPage.clickAddProduct();
        inventoryPage.clickGoToCart();
        cartPage.clickcheckOut();
        checkOutStepOnePage.fillFirstName('Alejandra');
        checkOutStepOnePage.fillLastName('Mosqueira');
        checkOutStepOnePage.fillPostalCode('1');
    })

    it('click to continue',() =>{
        checkOutStepOnePage.clickContinue()
        cy.location('pathname').should('equal','/checkout-step-two.html')
    })

    it('click to before',() =>{
        checkOutStepOnePage.clickCancel()
        cy.location('pathname').should('equal','/cart.html')
    })
})