'use strict'
const pkgName = 'auth.events'

const getFormFields = require(`../../../lib/get-form-fields`)
const util = require('../util')
const api = require('./api')
const ui = require('./ui')

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
    .catch(ui.onSignInFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp) // This is a form.
  $('#sign-in').on('submit', onSignIn) // This is a form.
  $('#sign-out').on('click', onSignOut) // This is a button.
  $('#change-pw').on('submit', onChangePassword) // This is a form.
}

module.exports = {
  addHandlers
}
