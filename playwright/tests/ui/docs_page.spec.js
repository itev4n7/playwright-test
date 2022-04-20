const { test, expect } = require('@playwright/test')
const { INTRO_URL, timeouts } = require('../../constants/constants')
const { DocsPage } = require('../../pages/DocsPage')

test.describe('Check "Docs" page', async () => {

    test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!')

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running "${testInfo.title}"`)
        await page.goto(INTRO_URL)
    })

    test('Check side panel introduction items', async ({ page, browserName }) => {
        const docsPage = new DocsPage(page)
        const introductionItems = await docsPage.introductionListItems
        for (let i = 0; i < await introductionItems.count(); i++) {
            await expect(introductionItems.nth(i), 'should be expanded').toBeVisible()
        }
        await docsPage.introductionSectionHeader.click()
        await docsPage.introductionListItems.first().waitFor({ state: 'hidden' })
        for (let i = 0; i < await introductionItems.count(); i++) {
            await expect(introductionItems.nth(i), 'should be collapsed').not.toBeVisible()
        }
    })

    test('Check tag @slow', async ({ page }) => {
        await page.waitForTimeout(timeouts.FIVE_SECONDS)
    })
})