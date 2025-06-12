/*
import {test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"; 
import CommonUtils from "../utils/commonUtils";
import { test } from "../Fixtures/pom-fixtures";
*/
import {test } from "../Fixtures/common-fixtures";


test("Temp Test", async ({ page, loginPage, commonUtils }) => {
    /*
    const loginPage = new LoginPage(page);
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM("Admin", "admin123");
    */
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);

    /*Encrypting data using CommonUtils
    // This will use the encryption key from the environment variable ENCRYPTION_KEY
    //const commonUtils_Obj = new CommonUtils();
    commonUtils_Obj.encrpytData("admin123");
    */
    
    const decrypted_USER_NAME = commonUtils.decrpytData(process.env.USER_NAME!);
    const decrypted_PASSWORD = commonUtils.decrpytData(process.env.PASSWORD!);

    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(decrypted_USER_NAME, decrypted_PASSWORD);

});
