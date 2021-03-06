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

/*
**  Reset form fields that have a particular class.
*/
const resetForm = () => {
  $('form').trigger('reset')
}

/*
** Set timeout for messages.
*/
const timeoutMessage = () => {
  setTimeout(() => $(config.successFailMessageId).text(''), config.messageDelay)
}

/*
** hide object
*/
const hide = (id) => {
  $(id).addClass(config.hiddenClass)
}

/*
** show object
*/
const show = (id) => {
  $(id).removeClass(config.hiddenClass)
}

module.exports = {
  logMessage,
  logObject,
  displaySuccessFail,
  resetForm,
  timeoutMessage,
  hide,
  show
}
