/**
 * Returns the total sum of the array elements
 * @param {[]} arr array of num
 * @returns {num}
 */
const sumArray = (arr) => {
  if (arr === undefined) return 0

  let sum = 0
  for (const value of arr) {
    sum = sum + value
  }

  return sum
}

module.exports = { sumArray }
