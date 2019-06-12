'use strict'
const pkgName = 'calc.ui'

const calc = require('./calc')
const config = require('../config')
const store = require('../store')
const util = require('../util')
const listReadingsTemplate = require('../templates/readings_listing.handlebars')

/*
** renderSummary()
**
** NOTE: As we cannot guarantee in which order the data is returned, we have to
**       loop over the data twice to determine max and min.
*/
const renderSummary = (readings) => {
  util.show(config.summaryHeaderId)
  const summaryObj = calc.getSummaryInfo(readings)
  let textToRender = `<div class='summary-detail'>Distance driven: ${summaryObj.milesDriven} mi</div>`
  textToRender += `<div class='summary-detail'>Total Fuel Qty: ${summaryObj.totalFuel} gal</div>`
  textToRender += `<div class='summary-detail'>MPG: ${summaryObj.milesPerGallon}</div>`
  textToRender += `<div class='summary-detail'>PPG: ${summaryObj.pricePerGallon}</div>`
  $(config.summaryId).html(textToRender)
}

/*
** ***** Index functions *****
*/
const onIndexSuccessSilent = responseData => {
  util.logMessage(`${pkgName}.onIndexSuccessSilent()`)
  renderSummary(responseData.readings)
  store.allReadings = responseData.readings
}

const onIndexFailureSilent = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccessSilent()`, 'Whoa... Couldn\'t get summary data. Please try the \'Load Entries\' button.', false, responseData)
  util.timeoutMessage()
}

const onIndexSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccess()`, '', true, responseData)

  let textToRender = ''
  if (responseData.readings === undefined || responseData.readings.length === 0) {
    textToRender = "<section data-id='0' class='reading-entry'><h4>There are no entries to display yet.</h4></section>"
  } else {
    textToRender = listReadingsTemplate({readings: responseData.readings})
  }
  $(config.contentId).html(textToRender)
  onIndexSuccessSilent(responseData)
  util.hide(config.loadEntriesButtonId)
  util.show(config.hideEntriesButtonId)
}

const onIndexFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexFailure()`, 'Oops! Could not retrieve data. Please try again.', false, responseData)
  util.logObject(responseData)
  util.timeoutMessage()
}

/*
** ***** Create functions *****
*/
// NOTE: There is no create success function here - we just load the details
const onCreateFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onCreateFailure()`, 'Create failed!', false, responseData)
  util.logObject(responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.newEntryId)
  util.hide(config.newEntryBackButtonId)
  util.show(config.newEntryButtonId)
}

/*
** ***** Update functions *****
*/
// NOTE: There is no update success function here - we just reload the details
const onUpdateFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onUpdateFailure()`, 'Update failed. Please try again.', false, responseData)
  util.timeoutMessage()
}

/*
** ***** Delete functions *****
*/
// NOTE: There is no update success function here - we just reload the details
const onDeleteFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onUpdateFailure()`, 'Delete failed. Please try again.', false, responseData)
  util.timeoutMessage()
}

module.exports = {
  onIndexSuccess,
  onIndexSuccessSilent,
  onIndexFailureSilent,
  onIndexFailure,
  onCreateFailure,
  onUpdateFailure,
  onDeleteFailure
}
