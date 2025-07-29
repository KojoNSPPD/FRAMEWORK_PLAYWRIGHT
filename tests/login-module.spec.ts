//import { expect } from '@playwright/test'
import {test,expect} from '../Fixtures/hooks-fixtures'
import loginModuleData from '../data/login-module-data.json'

test.use({ storageState:{
    cookies: [],
    origins: []
}

})

test('[Login] Verify the user cannot log in with an invalid password', async ({gotoUrl,loginPage,commonUtils}) => {
  const username = commonUtils.decrpytData(process.env.USERNAME!)
  await loginPage.loginOrangeHRM(username, loginModuleData.wrong_password)
  await expect(loginPage.invalidCredentialsError).toHaveText(loginModuleData.invalid_credentials_text)
  await expect(loginPage.userNameInput).toBeVisible()
})

test('[Login] Verify the user can log in with an invalid username', async ({ gotoUrl,loginPage,commonUtils}) => {
  const password = commonUtils.decrpytData(process.env.PASSWORD!);
  await loginPage.loginOrangeHRM(loginModuleData.wrong_username, password);
  await expect(loginPage.invalidCredentialsError).toHaveText(loginModuleData.invalid_credentials_text)
  await expect(loginPage.userNameInput).toBeVisible()

})

test('[Login] Verify the user can log in with an invalid username and password', async ({ gotoUrl,loginPage,commonUtils}) => {
  await loginPage.loginOrangeHRM(loginModuleData.wrong_username, loginModuleData.wrong_password);
  await expect(loginPage.invalidCredentialsError).toHaveText(loginModuleData.invalid_credentials_text)
  await expect(loginPage.userNameInput).toBeVisible()

})