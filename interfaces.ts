// interface Vehicle {
//   name: string
//   year: Date
//   broken: boolean
//   summary(): string
// }

interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drinkTwo = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

// const printVehicle = (vehicle: {
//   name: string
//   year: number
//   broken: boolean
// }): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken? ${vehicle.broken}`)
// }
//interface saves us writing out all types
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drinkTwo)

// interfaces frequently used to restrict access to certain functions
// an object must satisfy the requirments of an interface in order to use a given function
// the more generalized the interface, the more reusable it becomes
