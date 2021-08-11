import computeF1 from '../../src/utils/computeF1.js'

describe('computeF1', () => {
  test('double 0 inputs should return 0', () => {
    const recall = 0
    const precission = 0
    const expected = 0

    const resp = computeF1(recall, precission)

    expect(resp).toBe(expected)
  })
})
