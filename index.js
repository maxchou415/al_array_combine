const rawArray = [{
  houseId: 123,
  src: '123'
}, {
  houseId: 123,
  src: '456'
}, {
  houseId: 456,
  src: '769'
}, {
  houseId: 456,
  src: '678'
}]

let indexArray = []

// Create a array with basic data (houseId) on related index(houseId).
rawArray.forEach(i => {
  indexArray[i.houseId] = { houseId: i.houseId, src: [] }
})

// Push data into targeted index (houseId)
rawArray.forEach(i => {
  indexArray[i.houseId].src.push(i.src)
})

console.log(indexArray)
