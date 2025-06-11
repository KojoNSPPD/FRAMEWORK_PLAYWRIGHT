/*import {test}from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"; */
import {test} from "../Fixtures/pom-fixtures";

test("Temp Test", async ({page,loginPage}) => {
    /*
    const loginPage = new LoginPage(page);
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM("Admin", "admin123");
    */

    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);

   // await loginPage.gotoOrangeHRM();
   // await loginPage.loginOrangeHRM("Admin", "admin123");
});
