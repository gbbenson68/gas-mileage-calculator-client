'use strict'

const formatFloat = (number) => {
  if (typeof number !== 'number') {
    return (0).toFixed(2)
  } else {
    return number.toFixed(2)
  }
}

module.exports = formatFloat
