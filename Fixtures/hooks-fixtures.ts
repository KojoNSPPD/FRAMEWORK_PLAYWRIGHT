import {test as baseTest} from './common-fixtures'

type HooksFixturesType = {
    gotoUrl: any;
    logout: any;
}

export const test = baseTest.extend<HooksFixturesType>({
    gotoUrl: async ({ loginPage}, use) => {
        await loginPage.gotoOrangeHrm();
        await use();
    },
    logout: async ({ userPage }, use) => {
        await use();
        await userPage.logout();
    }
})

export {expect} from '@playwright/test';