const { devices } = require('@playwright/test')

const config = {
    timeout: 30000,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    reporter: [
        ['line'],
        ['allure-playwright']
    ],
    workers: process.env.CI ? 3 : 1,
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        viewport: { width: 1920, height: 1080 },
        headless: !(!process.env.CI),
        ignoreHTTPSErrors: true,
        devtools: true,
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
}

module.exports = config