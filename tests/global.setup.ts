import {test} from '../Fixtures/common-fixtures'
import {expect} from '@playwright/test';


test('Global Setup for Auto-Login', async ({ page, loginPage, dasboardPage, commonUtils }) => {
    
    //username and password need to be encrypted before rubning the test
    const decrypted_USER_NAME = commonUtils.decrpytData(process.env.USER_NAME!);
    const decrypted_PASSWORD =  commonUtils.decrpytData(process.env.PASSWORD!);

    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(decrypted_USER_NAME, decrypted_PASSWORD);
    await page.waitForURL(`${process.env.BASE_URL}`+'web/index.php/dashboard/index');

    await expect(dasboardPage.dashboardTitleText).toBeVisible();
    await expect(dasboardPage.dashboardTitleText).toHaveText('Dashboard');
    
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})