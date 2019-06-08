'use strict'
const pkgName = 'calc.events'

const getFormFields = require('../../../lib/get-form-fields')
const util = require('../util')
const api = require('./api')

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
  $('#new-entry').on('click', onNewEntry)
}

module.exports = {
  addHandlers
}
