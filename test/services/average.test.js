const { average } = require('data-science-js')

describe('Arithmetic average', () => {
  test('Array of 0 should return 0', () => {
    const data = [0, 0, 0]
    const expected = 0

    const resp = average(data)

    expect(resp).toBe(expected)
  })
})
