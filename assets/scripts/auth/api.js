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
}

/*
** signIn()
*/
const signIn = (formData) => {
  util.logMessage(`${pkgName}.signIn()`)
}

/*
** signOut()
*/
const signOut = () => {
  util.logMessage(`${pkgName}.signOut()`)
}

/*
** changePassword()
*/
const changePassword = (formData) => {
  util.logMessage(`${pkgName}.changePassword()`)
}

/*
** createReading()
*/
const createReading = () => {
  util.logMessage(`${pkgName}.createReading()`)
}

/*
** updateReading()
*/
const updateReading = () => {
  util.logMessage(`${pkgName}.updateReading()`)
}

/*
** index()
*/
const index = () => {
  util.logMessage(`${pkgName}.index()`)
}

/*
** show()
*/
const show = () => {
  util.logMessage(`${pkgName}.show()`)
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createReading,
  updateReading,
  index,
  show
}
