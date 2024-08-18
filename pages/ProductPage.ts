import { expect, Locator, Page } from "@playwright/test";
import { loginUser, userDashboard } from "../data/general-data";

export class ProductPage {
    readonly page: Page;
    readonly sizeDropdown: Locator
    readonly addToCart: Locator
    readonly continueShopping: Locator


    constructor(page: Page) {
        this.page = page;
        this.sizeDropdown = page.getByLabel('Size')
        this.addToCart = page.getByRole('button', { name: 'Add to cart' })
        this.continueShopping = page.getByText('Continue shopping')
    }

    // Actions
    async selectSize(size: number) {
        await this.sizeDropdown.click()
        const selectElement = this.page.locator('#group_1');
        await selectElement.selectOption({ value: `${size}` });
    }

    async addProductToCart() {
        await this.addToCart.click()
    }

    async clickContinueShopping() {
        await this.continueShopping.click()
    }

    async openCartSection(numberOfProduct : number) {
        await this.page.getByRole('link', { name: `Cart ${numberOfProduct} Product` }).hover()
    }

    // Assertions
    async assertProductInCartSection(numberOfProduct : number) {
        await expect.soft(this.page.getByRole('link', { name: `Cart ${numberOfProduct} Product` })).toBeVisible()
    }

    async assertSelectedProductInCard(productName :string){
        await expect.soft(this.page.getByRole('term').getByText(productName)).toBeVisible()
    }

}
