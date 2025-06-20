import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    
    // Constructor to initialize the page and locators
    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByRole('textbox',{ name:'Username' });
        this.passwordInput = page.getByRole('textbox',{ name:'Password'});
        this.loginButton = page.getByRole("button", { name: "Login" });
    }
    
    // Methods to interact with the page
    async gotoOrangeHRM() {
       await this.page.goto(`${process.env.BASE_URL}`+'web/index.php/auth/login');
    }

    // Method to login to OrangeHRM
    /**
     * 
     * @param userName - The username for login
     * @param password - The password for login
     * @returns {Promise<void>}
     * @description This method fills in the username and password fields and clicks the login button.
     */
    async loginOrangeHRM(userName: string, password: string) {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        //await this.page.close();
    }

}