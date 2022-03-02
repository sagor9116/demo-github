const filterByAge = (data) => {
  return data.filter((item, index) => {
    if (typeof item.age === 'undefined') {
      throw new Error(`No "age" param in item ${index}`)
    }
    return item.age < 30
  })
}

export default filterByAge
