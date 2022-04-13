const { test, expect } = require('@playwright/test')
const { BASE_URL } = require('../../constants/constants')
const { NavigationBarComponent } = require('../../components/NavigationBarComponent')

test.describe('Check navigator bar component', async () => {

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running ${testInfo.title}`)
        await page.goto(BASE_URL)
    })

    test('Check "Playwright"(logo) button redirection', async ({ page }) => {
        const navigationBarComponent = new NavigationBarComponent(page)
        await navigationBarComponent.playwrightLogoButton.waitFor('visible')
        await navigationBarComponent.playwrightLogoButton.click()
        expect(page.url()).toEqual(BASE_URL)
    })
})