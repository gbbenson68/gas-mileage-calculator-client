'use strict'
const pkgName = 'api'

const config = require('../config')
const store = require('../store')
const util = require('../util')

/*
** signUp()
*/
const signUp = (formData) => {
  util.logMessage(`${pkgName}.signUp()`)
  util.logObject(formData)

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

/*
** signIn()
*/
const signIn = (formData) => {
  util.logMessage(`${pkgName}.signIn()`)
  util.logObject(formData)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

/*
** signOut()
*/
const signOut = (event) => {
  util.logMessage(`${pkgName}.signOut()`)
  util.logObject(event)

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

/*
** changePassword()
*/
const changePassword = (formData) => {
  util.logMessage(`${pkgName}.changePassword()`)
  util.logObject(formData)

  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
