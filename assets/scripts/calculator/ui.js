'use strict'
const pkgName = 'calc.ui'

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
  const milesDriven = maxOdo - minOdo
  const milesPerGallon = milesDriven / fuelSum
  const pricePerGallon = priceSum / fuelSum

  const textToRender = `<h2>Miles driven: ${milesDriven}   MPG: ${milesPerGallon}   PPG: ${pricePerGallon}</h2>`
  $(config.summaryId).html(textToRender)
}

/*
** ***** Index functions *****
*/
const onIndexSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccess()`, '', true, responseData)
  const textToRender = listReadingsTemplate({readings: responseData.readings})
  $(config.contentId).html(textToRender)
  renderSummary(responseData.readings)
}

const onIndexFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexFailure()`, 'Oops! Could not retrieve data. Please try again.', false, responseData)
}

/*
** ***** Create functions *****
*/
const onCreateSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onCreateSuccess()`, 'Create success!', true, responseData)
  util.logObject(responseData)
}

const onCreateFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onCreateFailure()`, 'Create failed!', false, responseData)
  util.logObject(responseData)
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
  onIndexFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
}
