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
** create()
*/
const create = (formData) => {
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
** update()
*/
const update = () => {
  util.logMessage(`${pkgName}.updateReading()`)
}

module.exports = {
  index,
  show,
  create,
  update
}
