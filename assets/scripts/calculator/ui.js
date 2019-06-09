'use strict'
const pkgName = 'calc.ui'

const config = require('../config')
const store = require('../store')
const util = require('../util')
const listReadingsTemplate = require('../templates/readings_listing.handlebars')

/*
** ***** Index functions *****
*/
const onIndexSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccess()`, '', true, responseData)
  const textToRender = listReadingsTemplate({readings: responseData.readings})
  $(config.contentId).html(textToRender)
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
