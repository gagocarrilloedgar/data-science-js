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
