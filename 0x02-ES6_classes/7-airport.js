export default class Airport {
  constructor(name, code) {
    // creating objs
    this._name = name;
    this._code = code;
  }

  toString() {
    // returns the string representation of the code obj.
    return `[object ${this._code}]`;
  }
}
