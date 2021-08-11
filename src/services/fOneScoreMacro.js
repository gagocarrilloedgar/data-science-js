const ConfusionMatrix = require('ml-confusion-matrix')
const { transpose } = require('mathjs')
const { average } = require('./average.js')
const { sumArray } = require('./sumArray.js')
const { computeF1 } = require('../utils/computeF1.js')

/**
 * Computes the F1Score macro value given the target and predicted arrays
 * @param {[]} target  array of num
 * @param {[]} predicted  array of num
 * @returns {Object} containing the f1score, the recall average and the precission average
 */

const fOneScoreMacro = (target, predicted) => {
  const CM2 = ConfusionMatrix.fromLabels(target, predicted)

  const CM = CM2.matrix
  const transposeCM = transpose(CM2.matrix)

  const m = CM[0].length
  const n = m

  const recallArr = []
  const precissionArr = []
  const f1Arr = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === j) {
        const recall = CM[i][j] / sumArray(transposeCM[j])
        const precission = CM[i][j] / sumArray(CM[i])
        f1Arr.push(computeF1(recall, precission))
        precissionArr.push(precission)
        recallArr.push(recall)
      }
    }
  }

  return {
    f1score: average(f1Arr),
    recall: average(recallArr),
    precission: average(precissionArr)
  }
}

module.exports = { fOneScoreMacro }
