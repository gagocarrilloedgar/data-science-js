const computeF1 = (recall, precission) =>
  recall * precission === 0 ? 0 : (2 * (recall * precission)) / (recall + precission)

export default computeF1
