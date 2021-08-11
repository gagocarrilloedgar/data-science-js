const { fOneScoreMacro } = require('../../src/services/fOneScoreMacro.js')

describe('F1Score macro', () => {
  test('Target and predicted equal should return 1', () => {
    const target = [0, 0, 0]
    const predicted = [0, 0, 0]

    const expected = 1

    const resp = fOneScoreMacro(target, predicted)

    expect(resp.f1score).toBe(expected)
  })
})
