import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { CorePage } from "./CorePage";
import { ProductPage } from "./ProductPage";

export class App {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get LoginPage() {
        return new LoginPage(this.page);
    }

    public get CorePage() {
        return new CorePage(this.page);
    }

    public get ProductPage() {
        return new ProductPage(this.page);
    }
}