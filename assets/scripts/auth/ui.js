'use strict'
const pkgName = 'auth.ui'

const config = require('../config')
const store = require('../store')
const util = require('../util')
const calcEvents = require('../calculator/events')

/*
** ***** Sign Up functions *****
*/
const onSignUpSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignUpSuccess()`, 'Signed up successfully! Please sign in.', true, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.signUpId)
  util.show(config.signInId)
}

const onSignUpFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignUpFailure()`, 'Signed up failed. Please try again.', false, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.authButtonClass)
  util.hide(config.signUpId)
  util.show(config.signInButtonId)
  util.show(config.signUpButtonId)
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
  util.show(config.changePWButtonId)
  util.show(config.signOutButtonId)
  util.show(config.calcButtonClass)
  util.hide(config.newEntryBackButtonId)
  util.hide(config.hideEntriesButtonId)
  util.show('hr')
  $(config.userDisplay).text(`You are logged in as ${store.user.email}, in case you forgot.`)

  // Auto-load summary information
  calcEvents.onIndex()
}

const onSignInFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignInFailure()`, 'Signed in failed. Have you signed up yet?', false, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.authButtonClass)
  util.hide(config.signInId)
  util.show(config.signInButtonId)
  util.show(config.signUpButtonId)
}

/*
** ***** Change PW functions *****
*/
const onChangePasswordSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onChangePasswordSuccess()`, 'Password changed successfully!', true, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.changePWId)
  util.hide(config.changePWBackButtonId)
  util.show(config.changePWButtonId)
  util.show(config.signOutButtonId)
}

const onChangePasswordFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onChangePasswordFailure()`, 'Change password failed. Please try again', false, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.changePWId)
  util.hide(config.changePWBackButtonId)
  util.show(config.changePWButtonId)
  util.show(config.signOutButtonId)
}

/*
** ***** Sign out functions *****
*/
const onSignOutSuccess = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignOutSuccess()`, 'Goodbye!', true, responseData)
  util.resetForm()
  util.timeoutMessage()
  util.hide(config.authButtonClass)
  util.hide(config.calcButtonClass)
  util.hide(config.newEntryId)
  util.hide(config.newEntryBackButtonId)
  util.hide('hr')
  util.hide(config.summaryHeaderId)
  $(config.specialMessageId).html('')

  util.show(config.signUpButtonId)
  util.show(config.signInButtonId)

  // Remove content upon sign-out
  $(config.contentId).html('')
  $(config.summaryId).html('')
  store.allReadings = {}
  $(config.userDisplay).text('')
}

const onSignOutFailure = responseData => {
  util.displaySuccessFail(`${pkgName}.onSignOutFailure()`, 'Sign out failed. Weird...', false, responseData)
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
