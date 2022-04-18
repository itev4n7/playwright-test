const { test, expect } = require('@playwright/test')
const { INTRO_URL } = require('../../constants/constants')
const { DocsPage } = require('../../pages/DocsPage')

test.describe('Check "Docs" page', async () => {

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running "${testInfo.title}"`)
        await page.goto(INTRO_URL)
    })

    test('Check side panel introduction items', async ({ page }) => {
        const docsPage = new DocsPage(page)
        const introductionItems = await docsPage.introductionListItems
        for (let i = 0; i < await introductionItems.count(); i++) {
            await expect(introductionItems.nth(i)).toBeVisible()
        }
        await docsPage.introductionSectionHeader.click()
        await docsPage.introductionListItems.first().waitFor({ state: 'hidden' })
        for (let i = 0; i < await introductionItems.count(); i++) {
            await expect(introductionItems.nth(i)).not.toBeVisible()
        }
    })
})