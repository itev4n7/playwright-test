
class DocsPage {

    constructor(page) {
        this.page = page
    }

    async get introductionSideBarrSection() {
        return await this.page.locator('//*[@class="menu__list-item-collapsible" and contains(.,"Introduction")]')
    }

    async get gettingStartedIntroductionListItem() {
        return await this.page.locator('//li[contains(@class, "menu__list-item")]//*[@href="/docs/intro"]')
    }

    async get inspectorIntroductionListItem() {
        return await this.page.locator('//li[contains(@class, "menu__list-item")]//*[@href="/docs/inspector"]')
    }

    async get traceViewerIntroductionListItem() {
        return await this.page.locator('//li[contains(@class, "menu__list-item")]//*[@href="/docs/trace-viewer"]')
    }

    async get documentHeader() {
        return await this.page.locator('.theme-doc-markdown header')
    }
}

module.exports = { DocsPage }

