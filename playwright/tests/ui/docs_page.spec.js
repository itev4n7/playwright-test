const { test, expect } = require('@playwright/test')
const { BASE_URL } = require('../../constants/constants')

test.describe.skip('Check "Docs" page', async () => {

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running ${testInfo.title}`)
        await page.goto(BASE_URL)
    })

    test('Check side panel introduction items', async ({ page }) => {

    })
})