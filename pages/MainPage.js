class MainPage {

    constructor(page) {
        this.page = page
    }

    get getStartedButton() {
        return this.page.locator('//*[@href="/docs/intro" and contains(text(),"Get started")]')
    }

    get githubLinkButton() {
        return this.page.locator('[href="https://github.com/microsoft/playwright/stargazers"]')
    }

    get footerCommunityColumnTitle() {
        return this.page.locator('//*[@class="footer__title" and text()="Community"]')
    }
}

module.exports = { MainPage }