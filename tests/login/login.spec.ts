import { test } from "@playwright/test";
import { App } from "../../pages/App";

test.describe("Login Tests", () => {
    let quipu: App;

    // This hook runs before each test
    test.beforeEach(async ({ page }) => {
        quipu = new App(page); // Initialize the App page object
        await page.goto("/");  // Navigate to the base URL
    });

    // Test case: Check if an error message is shown when the email is not provided
    test(`Click Sign In - Check if Email is Required`, async ({ page }) => {
        // Open the sign-in page
        await quipu.LoginPage.openSignIn();

        // Attempt to sign in without providing an email
        await quipu.LoginPage.clickSignIn();

        // Assert that an error message for missing email is displayed
        await quipu.LoginPage.assertErrorMessageForEmailRequired();
    });

    // Test case: Check if an error message is shown when the password is not provided
    test(`Click Sign In - Check if Password is Required`, async ({ page }) => {
        // Open the sign-in page
        await quipu.LoginPage.openSignIn();

        // Provide the email but no password
        await quipu.LoginPage.addLoginEmail();

        // Attempt to sign in without providing a password
        await quipu.LoginPage.clickSignIn();

        // Assert that an error message for missing password is displayed
        await quipu.LoginPage.assertErrorMessageForPasswordRequired();
    });

    // Test case: Validate the login functionality and user authentication
    test(`Shop Login Functionality Test: User Authentication and Access Control`, async ({ page }) => {
        // Open the sign-in page
        await quipu.LoginPage.openSignIn();

        // Provide valid login credentials
        await quipu.LoginPage.addLoginEmail();
        await quipu.LoginPage.addLoginPassword();

        // Click the sign-in button to log in
        await quipu.LoginPage.clickSignIn();

        // Assert that the user is successfully logged in
        await quipu.LoginPage.assertUserLoggedIn();
    });
});
