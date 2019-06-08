'use strict'
const pkgName = 'calc.events'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const config = require('./config')
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

const addHandlers = () => {
  $(config.newEntryButtonId).on('click', onNewEntry)
}

module.exports = {
  addHandlers
}
