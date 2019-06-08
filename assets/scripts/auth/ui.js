'use strict'
const pkgName = 'ui'

const config = require('../config')
const store = require('../store')
const util = require('../util')

/*
** ***** Sign Up functions *****
*/
const onSignUpSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignUpSuccess()`, 'Signed up successfully! Please sign in to play.', true, responseData)
}

const onSignUpFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignUpFailure()`, 'Signed up failed.', false, responseData)
}

/*
** ***** Sign In functions *****
*/
const onSignInSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignInSuccess()`, 'Signed in successfully!', true, responseData)
}

const onSignInFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignInFailure()`, 'Signed in failed. Have you signed up yet?', false, responseData)
}

/*
** ***** Change PW functions *****
*/
const onChangePasswordSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onChangePasswordSuccess()`, 'Password changed successfully!', true, responseData)
}

const onChangePasswordFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onChangePasswordFailure()`, 'Change password failed.', false, responseData)
}

/*
** ***** Sign out functions *****
*/
const onSignOutSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignOutSuccess()`, 'Goodbye!', true, responseData)
}

const onSignOutFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignOutFailure()`, 'Sign out failed.', false, responseData)
}

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
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure
}
