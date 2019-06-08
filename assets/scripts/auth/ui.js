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
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.signUpId)
  util.show(config.signInId)
}

const onSignUpFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignUpFailure()`, 'Signed up failed.', false, responseData)
  util.resetForm()
  util.timeoutMessage()
}

/*
** ***** Sign In functions *****
*/
const onSignInSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignInSuccess()`, 'Signed in successfully!', true, responseData)
  store.user = responseData.user
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.signInId)
  util.hide(config.backButtonId)
  util.show(config.signOutId)
}

const onSignInFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignInFailure()`, 'Signed in failed. Have you signed up yet?', false, responseData)
  util.resetForm()
  util.timeoutMessage()
}

/*
** ***** Change PW functions *****
*/
const onChangePasswordSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onChangePasswordSuccess()`, 'Password changed successfully!', true, responseData)
  util.resetForm()
  util.timeoutMessage()
}

const onChangePasswordFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onChangePasswordFailure()`, 'Change password failed.', false, responseData)
  util.resetForm()
  util.timeoutMessage()
}

/*
** ***** Sign out functions *****
*/
const onSignOutSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignOutSuccess()`, 'Goodbye!', true, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.signOutId)
  util.show(config.signUpButtonId)
  util.show(config.signInButtonId)
}

const onSignOutFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignOutFailure()`, 'Sign out failed.', false, responseData)
  util.resetForm()
  util.timeoutMessage()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
