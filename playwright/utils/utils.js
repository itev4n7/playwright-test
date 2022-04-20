class Utils {

    static async getNewWindowAfterClickOnBlankButton(blankButton, context) {
        const [newWindow] = await Promise.all([
            context.waitForEvent('page'),
            blankButton.click()
        ])
        await newWindow.waitForLoadState()
        return newWindow
    }
}

module.exports = {
    Utils
}