// import { describe } from "mocha";
import homeSaucePage from "../../saucedemo/homeSaucePage";
import inventoryPage from "../../saucedemo/inventoryPage";
import cartPage from "../../saucedemo/cartPage";
import checkOutStepOnePage from "../../saucedemo/checkOutStepOnePage";
import checkOutStepTwoPage from "../../saucedemo/checkOutStepTwoPage";
import checkOutCompletePage from "../../saucedemo/checkOutCompletePage";

describe('POM Implementation' , () => {
    // beforeEach(()=>{
    // cy.visit('https://www.saucedemo.com/')
    // })
    // cy.log('1a')

    it('should login to inventory page',() =>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        
        // cy.log('1a')

        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    })

    it('should display locked out message',()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('locked_out_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        
        // cy.log('1a')

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('should display incorrect username message',()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('incorrectUser')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        
        // cy.log('1a')

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    it('should display incorrect password message',()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('incorrectPassword')
        homeSaucePage.clickLogin();
        
        // cy.log('1a')

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

})