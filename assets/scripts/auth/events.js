'use strict'
const pkgName = 'auth.events'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const config = require('../config')
const ui = require('./ui')
const util = require('../util')

/*
** onSignUp()
**    parameter: event
**    returns: nothing
*/
const onSignUp = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onSignUp()`)
  const formData = getFormFields(event.target)
  util.logObject(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

/*
** onSignOut()
**    parameter: event
**    returns: nothing
*/
const onSignOut = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onSignOut()`)
  util.logObject(event)
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

/*
** onSignIn()
**    parameter: event
**    returns: nothing
*/
const onChangePassword = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onChangePassword()`)
  const formData = getFormFields(event.target)
  util.logObject(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

/*
** onSignIn()
**    parameter: event
**    returns: nothing
*/
const onSignIn = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onSignIn()`)
  const formData = getFormFields(event.target)
  util.logObject(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

/*
** showSignUp()
*/
const showSignUp = () => {
  util.hide(config.authButtonClass)
  util.show(config.signUpId)
  util.show(config.backButtonId)
}

/*
** showSignIn()
*/
const showSignIn = () => {
  util.hide(config.authButtonClass)
  util.show(config.signInId)
  util.show(config.backButtonId)
}

/*
** Hides either sign-in or sign-up and shows other buttons
*/
const backUp = () => {
  util.hide(config.authButtonClass)
  util.hide(config.signUpId)
  util.hide(config.signInId)
  util.show(config.signUpButtonId)
  util.show(config.signInButtonId)
  util.resetForm()
}

/*
** expose change password form
*/
const showChangePWForm = () => {
  util.hide(config.authButtonClass)
  util.show(config.changePWId)
  util.show(config.changePWBackButtonId)
}

/*
** go back from Change PW form
*/
const changePWBackUp = () => {
  util.hide(config.authButtonClass)
  util.hide(config.changePWId)
  util.show(config.changePWButtonId)
  util.show(config.signOutButtonId)
  util.resetForm()
}

const addHandlers = () => {
  $(config.signUpId).on('submit', onSignUp) // This is a form.
  $(config.signInId).on('submit', onSignIn) // This is a form.
  $(config.signOutButtonId).on('click', onSignOut) // This is a button.
  $(config.changePWId).on('submit', onChangePassword) // This is a form.
  $(config.signUpButtonId).on('click', showSignUp) // This is a button.
  $(config.signInButtonId).on('click', showSignIn) // This is a button.
  $(config.changePWButtonId).on('click', showChangePWForm) // This is a button.
  $(config.changePWBackButtonId).on('click', changePWBackUp) // This is a button.
  $(config.backButtonId).on('click', backUp) // This is a button.
}

module.exports = {
  addHandlers
}
