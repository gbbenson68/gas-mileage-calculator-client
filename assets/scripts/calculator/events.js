'use strict'
const pkgName = 'calc.events'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const config = require('../config')
const calc = require('./calc')
const ui = require('./ui')
const util = require('../util')

/*
** onLoadEntries()
*/
const onLoadEntries = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onLoadEntries()`)
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

/*
** onHideEntries()
*/
const onHideEntries = (event) => {
  event.preventDefault()
  $(config.contentId).html('')
  util.hide(config.hideEntriesButtonId)
  util.show(config.loadEntriesButtonId)
}

/*
** onIndex()
*/
const onIndex = (event) => {
  // Need this to prevent error on load from sign-in
  if (event !== undefined) {
    event.preventDefault()
  }
  util.logMessage(`${pkgName}.onIndex()`)
  api.index()
    .then(ui.onIndexSuccessSilent)
    .catch(ui.onIndexFailureSilent)
}

/*
** onNewEntry()
*/
const onNewEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onNewEntry()`)
  const formData = getFormFields(event.target)
  util.logObject(formData)

  if (calc.paramsAreValid(formData)) {
    api.createEntry(formData)
      .then(function (data) {
        util.resetForm()
        util.hide(config.newEntryId)
        util.hide(config.newEntryBackButtonId)
        util.show(config.newEntryButtonId)
        util.displaySuccessFail(`${pkgName}.onNewEntry`, 'Entry entered successfully.', true, '')
        onLoadEntries(event)
      })
      .catch(ui.onCreateFailure)
  }
}

/*
** onUpdateEntry()
*/
const onUpdateEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onUpdateEntry()`)
  const formData = getFormFields(event.target)
  const id = $(event.target).data('id')
  util.logMessage(`${pkgName}.onUpdateEntry()`, `data-id = ${id}`)
  util.logObject(formData)
  // TODO - Do not update if input fields are empty!
  api.updateEntry(formData, id)
    .then(function (data) {
      util.resetForm()
      util.displaySuccessFail(`${pkgName}.onUpdateEntry`, 'Entry updated successfully.', true, '')
      onLoadEntries(event)
    })
    .catch(ui.onUpdateFailure)
}

/*
** onUpdateEntry()
*/
const onDeleteEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onDeleteEntry()`)
  util.logObject(event.target)
  const id = $(event.target).data('id')
  util.logMessage(`${pkgName}.onDeleteEntry()`, `data-id = ${id}`)
  api.deleteEntry(id)
    .then(function (data) {
      onLoadEntries(event)
    })
    .catch(ui.onDeleteFailure)
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

/*
** showUpdateEntryForm()
*/
const showUpdateEntryForm = (event) => {
  const id = $(event.target).data('id')
  util.hide(`.data-id-${id}${config.updateEntryButtonClass}`)
  util.show(`.data-id-${id}${config.updateEntryClass}`)
  util.show(`.data-id-${id}${config.updateEntryBackButtonClass}`)
}

/*
** hideUpdateEntryForm()
*/
const hideUpdateEntryForm = (event) => {
  const id = $(event.target).data('id')
  util.hide(`.data-id-${id}${config.updateEntryClass}`)
  util.hide(`.data-id-${id}${config.updateEntryBackButtonClass}`)
  util.show(`.data-id-${id}${config.updateEntryButtonClass}`)
}

const addHandlers = () => {
  $(config.newEntryButtonId).on('click', showNewEntryForm)
  $(config.newEntryBackButtonId).on('click', hideNewEntryForm)
  $(config.newEntryId).on('submit', onNewEntry)
  $(config.loadEntriesButtonId).on('click', onLoadEntries)
  $(config.hideEntriesButtonId).on('click', onHideEntries)
  $(config.contentId).on('click', config.updateEntryButtonClass, showUpdateEntryForm)
  $(config.contentId).on('click', config.updateEntryBackButtonClass, hideUpdateEntryForm)
  $(config.contentId).on('submit', config.updateEntryClass, onUpdateEntry)
  $(config.contentId).on('click', config.deleteEntryButtonClass, onDeleteEntry)
}

module.exports = {
  addHandlers,
  onIndex
}
