import filterByAge from '../filter-by-age'

describe('Filter object by age', () => {
  test('It should filter objects with `param` age less than 30', () => {
    const data = [
      { name: 'Mario', last: 'Yepes', age: '77' },
      { name: 'Juan', last: 'Ramirez', age: '32' },
      { name: 'Consuelo', last: 'Cifuentes', age: '22' },
    ]
    const expected = [{ name: 'Consuelo', last: 'Cifuentes', age: '22' }]
    expect(filterByAge(data)).toEqual(expected)
  })
  test('Should throw an error if an item does not have the `age` param', () => {
    const data = [{}]
    expect(() => filterByAge(data)).toThrow(`No "age" param in item 0`)
  })
})
