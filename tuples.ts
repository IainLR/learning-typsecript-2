const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// type alias, allows us to define custom types
type Drink = [string, boolean, number]
// defining the tuple. Establishing to correct order
const pepsi: [string, boolean, number] = ['brown', true, 40]
