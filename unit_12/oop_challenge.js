// Part I
class Vehicle {
  constructor(make, model, year) {
    for (let prop of [make, model, year]) {
      if (prop === undefined)
        throw new Error(`The ${prop} argument is required`);
    }

    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep";
  }

  toString() {
    return `The vehicle is a ${make} ${model} from ${year}`;
  }
}

// Part II
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part III
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

// Part IV
class Garage {
  constructor(capacity) {
    if (capacity === undefined)
      throw new Error("The capacity argument is required");
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(vehicle) {
    if (!(vehicle instanceof Vehicle))
      return "Only vehicles are allowed in here!";

    if (this.vehicles.length === this.capacity) return "Sorry, we’re full.";

    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}
