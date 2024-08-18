import { test } from "@playwright/test";
import { App } from "../../pages/App";
import { searchKeywords } from "../../data/general-data";

test.describe("Search Tests", () => {
    let quipu: App;

    // This hook runs before each test
    test.beforeEach(async ({ page }) => {
        quipu = new App(page); // Initialize the App page object
        await page.goto("/");  // Navigate to the base URL
    });

    // Test case: Check if the "Search" section is visible on the page
    test(`Check if "Search" section is visible`, async ({ page }) => {
        // Assert that the search section is visible on the page
        await quipu.CorePage.assertSearchSectionVisibility();
    });

    // Test case: Search for a specific item and verify the search results
    test(`Search Item : ${searchKeywords.searchBlouse}`, async ({ page }) => {
        // Perform the search for the item specified in searchKeywords
        await quipu.CorePage.searchItem(searchKeywords.searchBlouse);

        // Assert that the searched item is displayed in the search results
        await quipu.CorePage.assertSearchedItem(searchKeywords.searchBlouse);
    });
});
