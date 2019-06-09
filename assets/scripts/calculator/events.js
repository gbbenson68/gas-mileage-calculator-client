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
//  api.index()
//    .then(ui.onIndexSuccess)
//    .catch(ui.onIndexFailure)
}

/*
** onGetEntry()
**    load one Entry
*/
const onGetEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onGetEntry()`)
}

/*
** onNewEntry()
**    event handler for new reading
*/
const onNewEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onNewEntry()`)
//  api.create()
//    .then(ui.onShowSuccess)
//    .catch(ui.onShowFailure)
}

/*
** onUpdateEntry()
**    event handler for update entry
*/
const onUpdateEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onUpdateEntry()`)
//  api.create()
//    .then(ui.onShowSuccess)
//    .catch(ui.onShowFailure)
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
  $(config.loadEntriesButtonId).on('click', onLoadEntries)
}

module.exports = {
  addHandlers
}
