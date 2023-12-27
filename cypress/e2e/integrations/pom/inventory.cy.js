// import { describe } from "mocha";
import homeSaucePage from "../../saucedemo/homeSaucePage";
import inventoryPage from "../../saucedemo/inventoryPage";
import cartPage from "../../saucedemo/cartPage";
import checkOutStepOnePage from "../../saucedemo/checkOutStepOnePage";
import checkOutStepTwoPage from "../../saucedemo/checkOutStepTwoPage";
import checkOutCompletePage from "../../saucedemo/checkOutCompletePage";

describe('POM Implementation' , () => {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('shoul login to inventory page',() =>{
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();
        
        // cy.log('1a')

        inventoryPage.elements.titleSpan().should('have.text', 'Products')
        inventoryPage.clickAddProduct();
        cy.scrollTo('bottom')
        inventoryPage.clickAddSecondProduct();
        cy.scrollTo('top')
        inventoryPage.clickGoToCart();
        cartPage.clickRemoveSecondProduct();
        cartPage.clickcheckOut();
        checkOutStepOnePage.fillFirstName('Alejandra');
        checkOutStepOnePage.fillLastName('Mosqueira');
        checkOutStepOnePage.fillPostalCode('1');
        checkOutStepOnePage.clickContinue();
        // checkStepTwo
        cy.scrollTo('bottom')
        checkOutStepTwoPage.clickFinish();
        // checkComplete
        checkOutCompletePage.clickBackToHome();
    })

})