
import { Page, Locator } from '@playwright/test';

export class UserPage {
    readonly page: Page;
    readonly userMenuButton: Locator;
    readonly logoutButton: Locator;


    /**
     * Initializes a new instance of the UserPage class.
     * @param page - The Playwright Page object used to interact with the browser.
     */
    constructor(page: Page) {
        this.page = page;
        this.userMenuButton = page.locator('.oxd-userdropdown-tab');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout(){
        await this.userMenuButton.click();
        await this.logoutButton.click();
    }

}