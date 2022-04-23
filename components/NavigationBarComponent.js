class NavigationBarComponent {

    constructor(page) {
        this.page = page
    }

    get docsTopButton() {
        return this.page.locator('//*[@href="/docs/intro" and contains(.,"Docs")]')
    }

    get playwrightLogoButton() {
        return this.page.locator('//*[@class="navbar__title" and contains(text(),"Playwright")]')
    }
}

module.exports = { NavigationBarComponent }