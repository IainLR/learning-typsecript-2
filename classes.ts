class Vehicle {
  //   color: string

  //   constructor(color: string) {
  //     this.color = color
  //   }
  constructor(public color: string) {}

  public drive(): void {
    console.log('vrooom')
  }

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

//super() is used to call the constructor of the parent class

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }

  drive(): void {
    console.log('new vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

const car = new Car(4, 'blue')
car.startDrivingProcess()
// car.honk()

// public private protected
// private is often used to protect the application from other developers who may not fully understand the use of a given method/function.
//protected allows child classes to call methods, but these methods are otherwise inaccessable outside of the classes themselves
