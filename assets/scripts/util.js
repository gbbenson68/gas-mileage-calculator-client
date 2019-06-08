'use strict'

const config = require('./config')

/*
** logMessage() - logs a message to the console ONLY in development.
**    params: method name
**            message to be logged
**    returns: nothing
*/
const logMessage = function () {
  const args = Array.from(arguments)
  if (config.isNotProd) {
    const method = args.shift()
    console.log(`IN: ${method}:`, args.join(' '))
  }
}

/*
** logObject() - dumps an object to the console ONLY in development.
**    params: method name
**            message to be logged
**    returns: nothing
*/
const logObject = function (obj) {
  if (config.isNotProd) {
    console.log(obj)
  }
}

/*
** displaySuccessFail() - calls logMessage and updates the HTML (based on id)
**                    with a message.
**    params: message
**            isSuccessful - flag indicating success or failure
**    returns: nothing
*/
const displaySuccessFail = (method, message, isSuccessful, object) => {
  let displayClass
  if (isSuccessful) {
    displayClass = 'success'
  } else {
    displayClass = 'failure'
  }

  logMessage(method, message)
  logObject(object)
  $(config.successFailMessageId).removeClass()
  $(config.successFailMessageId).text(message)
  $(config.successFailMessageId).addClass(displayClass)
}

module.exports = {
  logMessage,
  logObject,
  displaySuccessFail
}
