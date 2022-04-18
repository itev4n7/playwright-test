class DocsPage {

    constructor(page) {
        this.page = page
    }

    get introductionSideBarrSection() {
        return this.page.locator('//*[@class="menu__list-item-collapsible" and contains(.,"Introduction")]')
    }

    get gettingStartedIntroductionListItem() {
        return this.page.locator('//li[contains(@class, "menu__list-item")]//*[@href="/docs/intro"]')
    }

    get inspectorIntroductionListItem() {
        return this.page.locator('//li[contains(@class, "menu__list-item")]//*[@href="/docs/inspector"]')
    }

    get traceViewerIntroductionListItem() {
        return this.page.locator('//li[contains(@class, "menu__list-item")]//*[@href="/docs/trace-viewer"]')
    }

    get documentHeader() {
        return this.page.locator('.theme-doc-markdown header')
    }

    get introductionSectionHeader() {
        return this.page.locator('//*[contains(@class, "menu__link") and contains(.,"Introduction")]')
    }

    get introductionListItems() {
        return this.page.locator('//li[contains(@class, "menu__list-item") and contains(.,"Introduction")]/ul/li')
    }
}

module.exports = { DocsPage }

