'use strict'

const config = require('./config')

/*
** logMessage() - logs a message to the console ONLY in development.
**    params: method name
**            message to be logged
**    returns: nothing
*/
const logMessage = (method, message, object) => {
  if (config.isNotProd) {
    console.log(`IN: ${method}: `, message, object)
  }
}

module.exports = {
  logMessage
}
