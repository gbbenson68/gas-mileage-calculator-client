'use strict'
const pkgName = 'calc.ui'

const util = require('../util')

/*
** ***** Index functions *****
*/
const onIndexSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexSuccess()`, '', true, responseData)
}

const onIndexFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onIndexFailure()`, 'Oops! Could retrieve data. Please try again.', false, responseData)
}

/*
** ***** Show functions *****
*/
const onShowSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onShowSuccess()`, '', true, responseData)
}

const onShowFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onShowFailure()`, '', false, responseData)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure
}
