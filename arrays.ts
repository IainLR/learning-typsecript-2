const carMakers: string[] = [' ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake = [['f150'], ['corolla'], ['camaro']]

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
// carMakers.push(100)

// help with 'map'
carMakers.map((car: string): string => {
  return car
})

// flexible types
const importantDates = [new Date(), '2030-10-10']

const guitarBrands = ['Fender', 'Gretsch', 'Jackson']

const myGuitar = guitarBrands[0]

guitarBrands.map((guitar: string): string => {
  return guitar
})
