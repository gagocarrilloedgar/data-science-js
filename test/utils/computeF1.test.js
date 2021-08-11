import computeF1 from '../../src/utils/computeF1.js'

describe('computeF1', () => {
  test('double 0 inputs should return 0', () => {
    const recall = 0
    const precission = 0
    const expected = 0

    const resp = computeF1(recall, precission)

    expect(resp).toBe(expected)
  })

  test('undefined shoudl return 0', () => {
    const expected = 0

    const resp = computeF1()

    expect(resp).toBe(expected)
  })

  test('recall and precission 1 should return 1', () => {
    const recall = 1
    const precission = 1
    const expected = 1

    const resp = computeF1(recall, precission)

    expect(resp).toBe(expected)
  })
})
