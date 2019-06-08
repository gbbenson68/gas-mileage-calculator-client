'use strict'

let apiUrl
const apiUrls = {
  production: 'https://blooming-dawn-78235.herokuapp.com/',
  development: 'http://localhost:4741'
}

let isNotProd
const prodFlag = {
  production: false,
  development: true
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
  isNotProd = prodFlag.development
} else {
  apiUrl = apiUrls.production
  isNotProd = prodFlag.production
}

module.exports = {
  apiUrl,
  isNotProd
}
