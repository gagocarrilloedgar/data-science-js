const { sumArray } = require('./sumArray.js')

/**
 * Computes the arithmetic mean of a given array
 * @param {Array} arr
 * @returns {Number}
 */
const average = (arr) => {
  return sumArray(arr) / arr.length
}

module.exports = { average }
