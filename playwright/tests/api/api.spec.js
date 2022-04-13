const { test, expect } = require('@playwright/test')

test.describe('Check API', async () => {

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running ${testInfo.title}`)
    })

    test('Check call - GET /docs/api/class-playwright 200', async ({ request }) => {
        const apiDocsUrl = 'https://playwright.dev/docs/api/class-playwright'
        const responce = await request.get(apiDocsUrl)
        expect(responce.status()).toEqual(200)
    })
})