'use strict'
const pkgName = 'calc.events'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const config = require('../config')
const ui = require('./ui')
const util = require('../util')

/*
**
** onNewEntry()
**    event handler for new reading
*/
const onNewEntry = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onNewEntry()`)
}

/*
**
** onNewEntry()
**    event handler for new reading
*/
const onLoadEntries = (event) => {
  event.preventDefault()
  util.logMessage(`${pkgName}.onLoadEntries()`)
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const addHandlers = () => {
  $(config.newEntryButtonId).on('click', onNewEntry)
  $(config.loadEntriesButtonId).on('click', onLoadEntries)
}

module.exports = {
  addHandlers
}
