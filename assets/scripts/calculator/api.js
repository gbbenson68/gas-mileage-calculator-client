'use strict'
const pkgName = 'calc.api'

const util = require('../util')

/*
** index()
*/
const index = () => {
  util.logMessage(`${pkgName}.index()`)
}

/*
** show()
*/
const show = () => {
  util.logMessage(`${pkgName}.show()`)
}

/*
** createReading()
*/
const createReading = () => {
  util.logMessage(`${pkgName}.createReading()`)
}

/*
** updateReading()
*/
const updateReading = () => {
  util.logMessage(`${pkgName}.updateReading()`)
}

module.exports = {
  index,
  show,
  createReading,
  updateReading
}
