'use strict'
const pkgName = 'calc.ui'

const config = require('../config')
const util = require('../util')
const listReadingsTemplate = require('../templates/readings_listing.handlebars')

/*
** renderSummary()
**
** NOTE: As we cannot guarantee in which order the data is returned, we have to
**       loop over the data twice to determine max and min.
*/
const renderSummary = (readings) => {
  let maxOdo = 0
  let fuelSum = 0
  let priceSum = 0.0
  readings.forEach((reading) => {
    fuelSum = fuelSum + reading.fuel_amount // The linter complains if I use +=
    priceSum = priceSum + reading.price // The linter complains if I use +=
    if (reading.odometer_reading > maxOdo) {
      maxOdo = reading.odometer_reading
    }
  })

  let minOdo = maxOdo // To make sure we get minimum.
  readings.forEach((reading) => {
    if (reading.odometer_reading < minOdo) {
      minOdo = reading.odometer_reading
    }
  })
  const milesDriven = maxOdo - minOdo // This should always be an integer.
  let milesPerGallon = 0
  let pricePerGallon = 0
  if (fuelSum !== 0) {
    milesPerGallon = (milesDriven / fuelSum).toFixed(1)
    pricePerGallon = (priceSum / fuelSum).toFixed(2)
  } else {
    milesPerGallon = 0.0
    pricePerGallon = 0.00
  }

  let textToRender = '<div class=\'sum-wrapper\'>'
  textToRender += `<div class='summary-detail'>Summary:</div>`
  textToRender += `<div class='summary-detail'>Distance driven: ${milesDriven} mi</div>`
  textToRender += `<div class='summary-detail'>Total Fuel: ${fuelSum} gal</div>`
  textToRender += `<div class='summary-detail'>MPG: ${milesPerGallon}</div>`
  textToRender += `<div class='summary-detail'>PPG: ${pricePerGallon}</div>`
  textToRender += '</div>'
  $(config.summaryId).html(textToRender)
}

/*
** ***** Index functions *****
*/
const onIndexSuccessSilent = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccessSilent()`, '', true, responseData)
  renderSummary(responseData.readings)
}

const onIndexSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccess()`, '', true, responseData)
  const textToRender = listReadingsTemplate({readings: responseData.readings})
  $(config.contentId).html(textToRender)
  onIndexSuccessSilent(responseData)
}

const onIndexFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexFailure()`, 'Oops! Could not retrieve data. Please try again.', false, responseData)
  util.logObject(responseData)
}

/*
** ***** Create functions *****
*/
const onCreateSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onCreateSuccess()`, 'Create success!', true, responseData)
  util.logObject(responseData)
  util.resetForm()
}

const onCreateFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onCreateFailure()`, 'Create failed!', false, responseData)
  util.logObject(responseData)
  util.resetForm()
  util.hide(config.newEntryId)
  util.hide(config.newEntryBackButtonId)
  util.show(config.newEntryButtonId)
}

/*
** ***** Update functions *****
*/
const onUpdateSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onUpdateSuccess()`, '', true, responseData)
}

const onUpdateFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onUpdateFailure()`, '', false, responseData)
}
module.exports = {
  onIndexSuccess,
  onIndexSuccessSilent,
  onIndexFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
}
