import sumArray from '../../src/services/sumArray'

describe('Array sum', () => {
  test('Array of 0 should return 0', () => {
    const data = [0, 0, 0]
    const expected = 0

    const resp = sumArray(data)

    expect(resp).toBe(expected)
  })

  test('null array should return 0', () => {
    const expected = 0

    const resp = sumArray()

    expect(resp).toBe(expected)
  })

  test('Array should return number', () => {
    const data = [2, 2, 2]
    const expected = 6

    const resp = sumArray(data)

    expect(resp).toBe(expected)
  })
})
