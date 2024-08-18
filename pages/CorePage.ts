import { expect, Locator, Page } from "@playwright/test";

export class CorePage {
    readonly page: Page;
    readonly searchField: Locator
    readonly clickSearchButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByPlaceholder('Search');
        this.clickSearchButton = page.locator(".button-search");
    }

    // Actions
    async searchItem(itemName: string) {
        await this.searchField.fill(itemName);
        await this.clickSearchButton.click();
    }

    async openProduct(productName : string){
        await this.page.locator('#center_column').getByText(`${productName}`, { exact: true }).click()
    }

    // Assertions
    async assertSearchSectionVisibility() {
        await expect.soft(this.searchField).toBeVisible();
        await expect.soft(this.clickSearchButton).toBeVisible();
    }

    async assertSearchedItem(itemName :string){
        await expect.soft(this.page.getByText('> Search')).toBeVisible();
        await expect.soft(this.page.getByRole('heading', { name: `Search "${itemName}"` })).toBeVisible();
    };
}