class Vehicle {
  public drive(): void {
    console.log('vrooom')
  }

  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
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

const car = new Car()
car.startDrivingProcess()
// car.honk()

// public private protected
// private is often used to protect the application from other developers who may not fully understand the use of a given method/function.
//protected allows child classes to call methods, but these methods are otherwise inaccessable outside of the classes themselves
