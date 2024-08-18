import { expect, Locator, Page } from "@playwright/test";
import { loginUser, userDashboard } from "../data/general-data";

export class LoginPage {
    readonly page: Page;
    readonly clickLogin: Locator
    readonly aleradyReistered: Locator
    readonly errorMessage: Locator
    readonly emailRequired: Locator
    readonly passwordRequired: Locator
    readonly signIn: Locator
    readonly loginEmail : Locator
    readonly loginPassword : Locator

    constructor(page: Page) {
        this.page = page;
        this.clickLogin = page.getByRole('link', { name: 'Sign in' });
        this.aleradyReistered = page.getByText('Already registered? Email');
        this.errorMessage = page.getByText('There is 1 error');
        this.emailRequired = page.getByText('An email address required.');
        this.passwordRequired = page.getByText('Password is required.');
        this.signIn = page.getByRole('button', { name: ' Sign in' });
        this.loginEmail = page.locator('#email');
        this.loginPassword = page.locator('#passwd');
    }

    // Actions
    async openSignIn() {
        await this.clickLogin.click();
        expect.soft(this.aleradyReistered, "Already registered? Section should be visible.").toBeVisible();
    }

    async clickSignIn() {
        await this.signIn.waitFor();
        await this.signIn.click();
    }

    async addLoginEmail() {
        await this.loginEmail.waitFor()
        await this.loginEmail.fill(loginUser.email);
    }

    async addLoginPassword(){
        await this.loginPassword.fill(loginUser.password);
    }

    // Assertions
    async assertErrorMessageForEmailRequired() {
        await expect.soft(this.errorMessage, "Error Message should be visible.").toBeVisible();
        await expect.soft(this.emailRequired, "Email Required info should be visible.").toBeVisible();
    }

    async assertErrorMessageForPasswordRequired() {
        await expect.soft(this.errorMessage, "Error Message should be visible.").toBeVisible();
        await expect.soft(this.passwordRequired, "Password Required info should be visible.").toBeVisible();
    }

    async assertUserLoggedIn(){
       await expect.soft(this.page.getByRole('link', { name: loginUser.name })).toBeVisible();
       await expect.soft(this.page.getByTitle('Log me out')).toBeVisible();
       await expect.soft(this.page.locator('h1:text-is("My account")')).toBeVisible();
       await expect.soft(this.page.getByRole('link', { name: userDashboard.userAddress })).toBeVisible();
       await expect.soft(this.page.getByRole('link', { name: userDashboard.orderHistory })).toBeVisible();
       await expect.soft(this.page.getByRole('link', { name: userDashboard.creditSlips }).nth(0)).toBeVisible();
       await expect.soft(this.page.getByRole('link', { name: userDashboard.personalInformation })).toBeVisible();
       await expect.soft(this.page.getByRole('link', { name: userDashboard.myAddresses }).nth(0)).toBeVisible();
    }
}
