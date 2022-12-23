export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  // Method thar returns the clone of the class
  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
