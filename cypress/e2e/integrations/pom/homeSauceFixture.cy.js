import homeSaucePage from "../../saucedemo/homeSaucePage";
import inventoryPage from "../../saucedemo/inventoryPage";

const tests = require('../../data-driven/sauceUser.json')

describe('home sauce demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    });

    tests.forEach(test => {
        
        it(test.name,()=>{
            homeSaucePage.typeUsername('standard_user')
            homeSaucePage.typePassword('secret_sauce')
            homeSaucePage.clickLogin();

            if(test.name === 'should login to inventory page'){
                inventoryPage.elements.titleSpan().should('have.text' , test.expected)
            }else{
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)
            }
        })
    });
})