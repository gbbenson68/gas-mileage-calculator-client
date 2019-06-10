'use strict'
const pkgName = 'calc.api'

const config = require('../config')
const store = require('../store')
const util = require('../util')

/*
** index()
*/
const index = () => {
  util.logMessage(`${pkgName}.index()`)
  return $.ajax({
    url: config.apiUrl + '/readings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

/*
** show()
*/
const show = (id) => {
  util.logMessage(`${pkgName}.show()`)
  return $.ajax({
    url: config.apiUrl + `/readings/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

/*
** createEntry()
*/
const createEntry = (formData) => {
  util.logMessage(`${pkgName}.createReading()`)
  return $.ajax({
    url: config.apiUrl + '/readings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

/*
** updateEntry()
*/
const updateEntry = (formData, id) => {
  util.logMessage(`${pkgName}.updateEntry()`)
  util.logObject(formData)
  return $.ajax({
    url: config.apiUrl + `/readings/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

/*
** deleteEntry()
*/
const deleteEntry = (id) => {
  util.logMessage(`${pkgName}.deleteEntry()`)
  return $.ajax({
    url: config.apiUrl + `/readings/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  show,
  createEntry,
  updateEntry,
  deleteEntry
}
