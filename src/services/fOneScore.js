import { fromLabels } from 'ml-confusion-matrix'
import { transpose } from 'mathjs'
import average from './average.js'
import sumArray from './sumArray.js'
import computeF1 from '../utils/computeF1.js'

const fOneScore = (target, predicted) => {
  const CM2 = fromLabels(target, predicted)

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

export default fOneScore
