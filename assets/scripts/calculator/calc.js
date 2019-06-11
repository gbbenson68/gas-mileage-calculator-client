'use strict'
const pkgName = 'calc.calc'

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
  const newTransDate = formData.reading.transaction_date
  const newOdoReading = formData.reading.odometer_reading
  const lastTransDate = store.allReadings[store.allReadings.length - 1].transaction_date
  const lastOdoReading = store.allReadings[store.allReadings.length - 1].odometer_reading
  const today = todayDate()

  if (newTransDate > today) {
    util.displaySuccessFail(`${pkgName}.paramsAreValid`, 'You cannot enter a date later than today, please try again!', false, '')
    util.timeoutMessage()
    return false
  }

  if (newTransDate < lastTransDate && newOdoReading >= lastOdoReading) {
    util.displaySuccessFail(`${pkgName}.paramsAreValid`, 'Inconsistent data, please check your entry and try again!', false, '')
    util.timeoutMessage()
    return false
  } else if (newTransDate >= lastTransDate && newOdoReading < lastOdoReading) {
    util.displaySuccessFail(`${pkgName}.paramsAreValid`, 'Inconsistent data, please check your entry and try again!', false, '')
    util.timeoutMessage()
    return false
  } else {
    return true
  }
}

module.exports = {
  paramsAreValid
}
