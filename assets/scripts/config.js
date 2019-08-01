'use strict'

// Constants for controlling UI functionality
const signUpId = '#sign-up'
const signInId = '#sign-in'
const signUpButtonId = '#sign-up-button'
const signInButtonId = '#sign-in-button'
const backButtonId = '#back-button'
const signOutButtonId = '#sign-out-button'
const changePWId = '#change-pw'
const changePWButtonId = '#change-pw-button'
const changePWBackButtonId = '#change-pw-back-button'
const newEntryId = '#new-entry'
const newEntryButtonId = '#new-entry-button'
const newEntryBackButtonId = '#new-entry-back-button'
const loadEntriesButtonId = '#load-entries-button'
const hideEntriesButtonId = '#hide-entries-button'
const deleteEntryButtonId = '#delete-entry-button'

const userDisplay = '#user-display'
const successFailMessageId = '#user-message'
const summaryHeaderId = '#summary-header'
const specialMessageId = '#special-message'
const specialMessageClass = '.special-message'
const defaultContentClass = '.default-content'
const formClassForReset = '.form-reset'
const authButtonClass = '.auth-button'
const calcButtonClass = '.calculator-button'
const updateEntryClass = '.update-entry'
const updateEntryButtonClass = '.update-entry-button'
const updateEntryBackButtonClass = '.update-entry-back-button'
const deleteEntryButtonClass = '.delete-entry-button'
const contentId = '#content'
const summaryId = '#summary'
const hiddenClass = 'hidden' // NOTE: Do not use a leading '.' here!!
const messageDelay = 8000

let apiUrl
const apiUrls = {
  production: 'https://gas-mileage-calculator.herokuapp.com',
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
  changePWButtonId,
  changePWBackButtonId,
  newEntryId,
  newEntryButtonId,
  newEntryBackButtonId,
  loadEntriesButtonId,
  hideEntriesButtonId,
  deleteEntryButtonId,
  userDisplay,
  successFailMessageId,
  summaryHeaderId,
  specialMessageId,
  specialMessageClass,
  defaultContentClass,
  formClassForReset,
  authButtonClass,
  calcButtonClass,
  updateEntryClass,
  updateEntryButtonClass,
  updateEntryBackButtonClass,
  deleteEntryButtonClass,
  contentId,
  summaryId,
  messageDelay,
  hiddenClass,
  apiUrl,
  isNotProd
}
