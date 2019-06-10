'use strict'
const pkgName = 'calc.events'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const config = require('../config')
const ui = require('./ui')
const util = require('../util')

/*
** onLoadEntries()
**    event handler for new reading
*/
const onLoadEntries = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onLoadEntries()`)
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

/*
** onIndex()
**    separate API call for summary load only
*/
const onIndex = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onIndex()`)
  api.index()
    .then(ui.onIndexSuccessSilent)
    .catch(ui.onIndexFailure)
}

/*
** onNewEntry()
**    event handler for new reading
*/
const onNewEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onNewEntry()`)
  const formData = getFormFields(event.target)
  util.logObject(formData)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

/*
** onUpdateEntry()
**    event handler for update entry
*/
const onUpdateEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onUpdateEntry()`)
  // TODO - Do not update if input fields are empty!
//  api.create()
//    .then(ui.onUpdateSuccess)
//    .catch(ui.onUpdateFailure)
}

/*
** onUpdateEntry()
**    event handler for update entry
*/
const onDeleteEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onDeleteEntry()`)
  // TODO - Do not update if input fields are empty!
//  api.create()
//    .then(ui.onUpdateSuccess)
//    .catch(ui.onUpdateFailure)
}

/*
** showNewEntryForm()
*/
const showNewEntryForm = () => {
  util.hide(config.newEntryButtonId)
  util.show(config.newEntryId)
  util.show(config.newEntryBackButtonId)
}

/*
** hideNewEntryForm()
*/
const hideNewEntryForm = () => {
  util.hide(config.newEntryId)
  util.hide(config.newEntryBackButtonId)
  util.show(config.newEntryButtonId)
}

const addHandlers = () => {
  $(config.newEntryButtonId).on('click', showNewEntryForm)
  $(config.newEntryBackButtonId).on('click', hideNewEntryForm)
  $(config.newEntryId).on('submit', onNewEntry)
  $(config.loadEntriesButtonId).on('click', onLoadEntries)
}

module.exports = {
  addHandlers,
  onIndex
}
