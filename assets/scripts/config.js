'use strict'

// Constants for controlling UI functionality
const signUpId = '#sign-up'
const signInId = '#sign-in'
const signUpButtonId = '#sign-up-button'
const signInButtonId = '#sign-in-button'
const backButtonId = '#back-button'
const signOutButtonId = '#sign-out-button'
const changePWId = '#change-pw'
const changePWIdButton = '#change-pw-button'
const newEntryButtonId = '#new-entry-button'

const successFailMessageId = '#user-message'
const formClassForReset = '.form-reset'
const hiddenClass = 'hidden' // NOTE: Do not use a leading '.' here!!
const messageDelay = 8000

let apiUrl
const apiUrls = {
  production: 'https://blooming-dawn-78235.herokuapp.com',
  development: 'http://localhost:4741'
}

let isNotProd
const prodFlag = {
  production: false,
  development: true
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
  isNotProd = prodFlag.development
} else {
  apiUrl = apiUrls.production
  isNotProd = prodFlag.production
}

module.exports = {
  signUpId,
  signInId,
  signUpButtonId,
  signInButtonId,
  backButtonId,
  signOutButtonId,
  changePWId,
  changePWIdButton,
  newEntryButtonId,
  successFailMessageId,
  formClassForReset,
  messageDelay,
  hiddenClass,
  apiUrl,
  isNotProd
}
