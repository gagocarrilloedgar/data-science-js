/**
 * Computes de MSE of two given arrays of num
 * @param {Array} predicted
 * @param {Array} target
 * @returns {Number}
 */
const meanSquareError = (predicted, target) => {
  const n = predicted.length
  let mse = 0

  for (let i = 0; i < n; i++) {
    const msePlus = Math.pow(predicted[i] - target[i], 2)
    mse = mse + msePlus
  }

  return mse / n
}

export default meanSquareError
