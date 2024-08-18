import { test } from "@playwright/test";
import { App } from "../../pages/App";
import { productSize, searchKeywords } from "../../data/general-data";

test.describe("Add To Cart Tests", () => {
    let quipu: App;

    // This hook runs before each test
    test.beforeEach(async ({ page }) => {
        quipu = new App(page); // Initialize the App page object
        await page.goto("/");  // Navigate to the base URL
    });

    test(`Add Item To Cart with Option : "Continue Shopping"`, async ({ page }) => {
        // Open the sign-in page
        await quipu.LoginPage.openSignIn();

        // Add login credentials
        await quipu.LoginPage.addLoginEmail();
        await quipu.LoginPage.addLoginPassword();

        // Click the sign-in button
        await quipu.LoginPage.clickSignIn();

        // Assert that the user is logged in
        await quipu.LoginPage.assertUserLoggedIn();

        // Search for the item using keywords
        await quipu.CorePage.searchItem(searchKeywords.searchBlouse);

        // Verify that the searched item is displayed
        await quipu.CorePage.assertSearchedItem(searchKeywords.searchBlouse);

        // Open the product page for the searched item
        await quipu.CorePage.openProduct(searchKeywords.searchBlouse);

        // Select the size of the product
        await quipu.ProductPage.selectSize(productSize.large);

        // Add the product to the cart
        await quipu.ProductPage.addProductToCart();

        // Click the "Continue Shopping" button
        await quipu.ProductPage.clickContinueShopping();

        // Assert that the product is listed in the cart section
        await quipu.ProductPage.assertProductInCartSection(1);

        // Open the cart section to view the products
        await quipu.ProductPage.openCartSection(1);

        // Assert that the selected product is in the cart
        await quipu.ProductPage.assertSelectedProductInCard(searchKeywords.searchBlouse);
    });

});
