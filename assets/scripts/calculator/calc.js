'use strict'
const pkgName = 'calc.calc'

const config = require('../config')
const store = require('../store')
const util = require('../util')

/*
** todayDate()
*/
const todayDate = () => {
  const now = new Date()
  const year = now.getFullYear().toString()

  let month = ''
  if (now.getMonth() + 1 < 10) {
    month = '0' + (now.getMonth() + 1).toString()
  } else {
    month = (now.getMonth() + 1).toString()
  }
  const day = now.getDate().toString()

  return year + '-' + month + '-' + day
}

/*
** paramsAreValid()
*/
const paramsAreValid = (formData) => {
  if (store.allReadings === undefined || store.allReadings.length === 0) {
    return true
  }
  const newEntryTransDate = formData.reading.transaction_date
  const newEntryOdoReading = formData.reading.odometer_reading
  const lastTransDate = store.allReadings[store.allReadings.length - 1].transaction_date
  const lastOdoReading = store.allReadings[store.allReadings.length - 1].odometer_reading
  const today = todayDate()

  // Kick out an error if the new entry date is later than today.
  if (newEntryTransDate > today) {
    util.displaySuccessFail(`${pkgName}.paramsAreValid`, 'You cannot enter a date later than today, please try again!', false, '')
    util.timeoutMessage()
    util.resetForm()
    return false
  }

  // Find the most recent transaction before the to-be-added entry and perform some data checks.
  let latestTransDate = ''
  let latestOdoReading = 0
  store.allReadings.forEach((reading) => {
    if (reading.transaction_date >= latestTransDate && reading.transaction_date < newEntryTransDate) {
      latestTransDate = reading.transaction_date
      latestOdoReading = reading.odometer_reading
    }
  })

  // Ensure that the entered odometer reading is greater than the latest odometer reading
  if (newEntryOdoReading <= latestOdoReading) {
    util.displaySuccessFail(`${pkgName}.paramsAreValid`, 'Inconsistent data. Did you drive in reverse?', false, '')
    util.timeoutMessage()
    util.resetForm()
    return false
  }

  if (newEntryTransDate <= lastTransDate) {
    // Create reverse array for backwards checking
    const reverseReadings = store.allReadings.slice()
    reverseReadings.reverse()

    let earliestTransDate = lastTransDate
    let earliestOdoReading = lastOdoReading
    reverseReadings.forEach((reading) => {
      if (reading.transaction_date < earliestTransDate && reading.transaction_date >= newEntryTransDate) {
        earliestTransDate = reading.transaction_date
        earliestOdoReading = reading.odometer_reading
      }
    })

    // Ensure that the entered odometer reading is less than the earliest odometer reading
    if (newEntryOdoReading >= earliestOdoReading) {
      util.displaySuccessFail(`${pkgName}.paramsAreValid`, 'Inconsistent data. New entry odometer reading greater than it should be.', false, '')
      util.timeoutMessage()
      util.resetForm()
      return false
    } else {
      return true
    }
  } else { // newEntryTransDate > lastTransDate
    return true
  }
}

/*
** getSummaryInfo()
*/
const getSummaryInfo = (readings) => {
  let summaryObj = {}
  let milesDriven = 0
  let totalFuel = 0
  let milesPerGallon = 0
  let pricePerGallon = 0
  let maxOdo = 0
  let pricePPGsum = 0.0
  let fuelMPGsum = 0.0

  $(config.specialMessageId).html('')
  if (readings.length < 2) {
    $(config.specialMessageId).html('PLEASE NOTE: Summary calculations only begin with more than one entry!')
    summaryObj = {
      milesDriven: 0,
      totalFuel: (0).toFixed(1),
      milesPerGallon: (0).toFixed(1),
      pricePerGallon: (0).toFixed(2)
    }
    return summaryObj
  }

  /*
  ** NOTE: The MPG and PPG calculations should NOT include the current fuel
  **       intake!
  */
  for (let i = 0; i < readings.length; i++) {
    if (i < readings.length - 1) {
      fuelMPGsum = fuelMPGsum + readings[i].fuel_amount // Linter complains if I use +=
      pricePPGsum = pricePPGsum + readings[i].price // Linter complains if I use +=
    }

    totalFuel += readings[i].fuel_amount
    if (readings[i].odometer_reading > maxOdo) {
      maxOdo = readings[i].odometer_reading
    }
  }

  let minOdo = maxOdo // To make sure we get minimum.
  readings.forEach((reading) => {
    if (reading.odometer_reading < minOdo) {
      minOdo = reading.odometer_reading
    }
  })

  milesDriven = maxOdo - minOdo // This should always be an integer.
  totalFuel = totalFuel.toFixed(1)
  if (fuelMPGsum !== 0) {
    milesPerGallon = (milesDriven / fuelMPGsum).toFixed(1)
    pricePerGallon = (pricePPGsum / fuelMPGsum).toFixed(2)
  } else {
    milesPerGallon = (0).toFixed(1)
    pricePerGallon = (0).toFixed(2)
  }

  summaryObj = {
    milesDriven: milesDriven,
    totalFuel: totalFuel,
    milesPerGallon: milesPerGallon,
    pricePerGallon: pricePerGallon
  }

  return summaryObj
}

module.exports = {
  paramsAreValid,
  getSummaryInfo
}
