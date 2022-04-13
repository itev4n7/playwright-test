
class MainPage {

    constructor(page) {
        this.page = page
    }

    get getStartedButton() {
        return this.page.locator('//*[@href="/docs/intro" and contains(text(),"Get started")]')
    }
}

module.exports = { MainPage }