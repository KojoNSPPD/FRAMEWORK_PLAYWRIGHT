/*
import {test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"; 
import CommonUtils from "../utils/commonUtils";
import { test } from "../Fixtures/pom-fixtures";
*/
import { expect } from "@playwright/test";
import {test } from "../Fixtures/common-fixtures";

//before each hook to navigate to the OrangeHRM login page
test.beforeEach('before each hook',async ({ loginPage }) => {
    await loginPage.gotoOrangeHRM();
})

test.afterEach('after each hook',async ({userPage }) => {
    await userPage.logout();
})


test("Temp Test 1", async ({ page, loginPage, commonUtils }) => {
    /*
    const loginPage = new LoginPage(page);
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM("Admin", "admin123");
    */

    /*
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
    */

    /*Encrypting data using CommonUtils
    // This will use the encryption key from the environment variable ENCRYPTION_KEY
    //const commonUtils_Obj = new CommonUtils();
    commonUtils_Obj.encrpytData("admin123");
    */
    
    /*
    const decrypted_USER_NAME = commonUtils.decrpytData(process.env.USER_NAME!);
    const decrypted_PASSWORD = commonUtils.decrpytData(process.env.PASSWORD!);
     */

    
   
    //await loginPage.loginOrangeHRM(decrypted_USER_NAME, decrypted_PASSWORD);
    console.log(await page.title());

});

test.only("Temp Test 2", async ({ page, loginPage }) => {
    
    await expect(page).toHaveTitle('OrangeHRM');
    await page.pause();

})

test("Temp Test 3", async ({ page, loginPage }) => {
    
    await expect(page).toHaveTitle('OrangeHRM');

})

