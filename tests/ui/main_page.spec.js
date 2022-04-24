const { test, expect } = require('@playwright/test')
const { BASE_URL, INTRO_URL, timeouts } = require('../../constants/constants')
const { MainPage } = require('../../pages/MainPage')
const { Utils } = require('../../utils/utils')

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

    test('Check redirection on GitHub repo after clicking on link button', async ({ page, context }) => {
        const mainPage = new MainPage(page)
        const playWrightRepoUrl = 'https://github.com/microsoft/playwright/stargazers'
        await mainPage.githubLinkButton.waitFor({ state: 'visible' })
        await expect(mainPage.githubLinkButton).toBeEnabled()
        const gitHubWindow = await Utils.getNewWindowAfterClickOnBlankButton(mainPage.githubLinkButton, context)
        await expect(gitHubWindow.url()).toEqual(playWrightRepoUrl)
        await page.bringToFront()
        await gitHubWindow.close()
    })

    test('Check scroll to footer "Community" column title', async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.footerCommunityColumnTitle.scrollIntoViewIfNeeded()
        await page.waitForTimeout(timeouts.ONE_SECOND)
        await expect(mainPage.footerCommunityColumnTitle).toBeVisible()
    })

    test('test will fail', async ({page}) => {
        const mainPage = new MainPage(page)
        await expect(mainPage.getStartedButton).toHaveText('wrong text')
    })
})

