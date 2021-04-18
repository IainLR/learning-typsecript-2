const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// type alias, allows us to define custom types for reusability
type Drink = [string, boolean, number]
// defining the tuple. Establishing to correct order
// const pepsi: [string, boolean, number] = ['brown', true, 40]
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 45]
const tea: Drink = ['brown', false, 0]

//tuples far less explicit as a glance. Objects preferable in general
const carSpecs: [number, number] = [400, 3354]

const carStats = {
  horsepower: 400,
  weight: 3354,
}
