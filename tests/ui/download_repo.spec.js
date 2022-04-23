

// const [ download ] = await Promise.all([
//     // It is important to call waitForEvent before click to set up waiting.
//     page.waitForEvent('download'),
//     // Triggers the download.
//     page.locator('text=Download file').click(),
// ]);
// // wait for download to complete
// const path = await download.path();

// download.cancel()
// download.createReadStream()
// download.delete()
// download.failure()
// download.page()
// download.path()
// download.saveAs(path)
// download.suggestedFilename()
// download.url()



// const [fileChooser] = await Promise.all([
//     // It is important to call waitForEvent before click to set up waiting.
//     page.waitForEvent('filechooser'),
//     // Opens the file chooser.
//     page.locator('text=Upload').click(),
// ]);
// await fileChooser.setFiles('myfile.pdf');

// fileChooser.element()
// fileChooser.isMultiple()
// fileChooser.page()
// fileChooser.setFiles(files[, options])

//testing url - https://demoqa.com/