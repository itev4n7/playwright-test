const { devices } = require('@playwright/test')
const path = require('path')

const config = {
    timeout: 30000,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    //reporter: process.env.CI ? 'dot' : 'list',
    workers: process.env.CI ? 3 : 1,
    testDir: path.join(__dirname, '../tests'),
    use: {
        viewport: { width: 1920, height: 1080 },
        video: 'off',
        headless: false,
        ignoreHTTPSErrors: true,
        devtools: true,
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
        // {
        //     name: 'Mobile Safari',
        //     use: devices['iPhone 13'],
        // },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
    ]
}

module.exports = config