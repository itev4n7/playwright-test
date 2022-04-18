const { test, expect } = require('@playwright/test')
const { BASE_URL, INTRO_URL } = require('../../constants/constants')
const { MainPage } = require('../../pages/MainPage')

test.describe('Check main playwright page', async () => {

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running "${testInfo.title}"`)
        await page.goto(BASE_URL)
    })

    test('Check "GET STARTED" button redirection', async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.getStartedButton.waitFor({ state: 'visible' })
        await mainPage.getStartedButton.click()
        expect(page.url()).toEqual(INTRO_URL)
    })
})

