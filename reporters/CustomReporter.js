class CustomReporter {

    onBegin(config, suite) {
        console.log(`Run suite with ${suite.allTests().length} tests`)
    }

    onTestBegin(test) {
        console.log(`Starting test - ${test.title}`)
    }

    onError(error) {
        console.log(`Test have an error: ${error.message}`)
    }

    onTestEnd(test, result) {
        console.log(`Test result: ${result.status}`)
    }

    onEnd(result) {
        console.log(`Finished the suite run: ${result.status}`)
    }
}

module.exports = CustomReporter