const computeF1 = (recall, precission) => {
  if (precission === undefined || recall === undefined) {
    return 0
  } else {
    return recall * precission === 0 ? 0 : (2 * (recall * precission)) / (recall + precission)
  }
}
module.exports = { computeF1 }
