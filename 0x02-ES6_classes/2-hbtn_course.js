export default class HolbertonCourse {
  constructor(name, length, students) {
    // To verify attribue object type
    if (Object.getPrototypeOf(name) !== String.prototype) {
      throw TypeError('Name must be a string');
    }

    if (Object.getPrototypeOf(length) !== Number.prototype) {
      throw TypeError('Length must be a number');
    }

    if (Object.getPrototypeOf(students) !== Array.prototype && String.prototype) {
      throw TypeError('students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    // verify the new name is a string and set the new value
    if (Object.getPrototypeOf(newName) !== String.prototype) throw TypeError('Name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    // verify the new length is a number and set the new value
    if (Object.getPrototypeOf(newLength) !== Number.prototype) throw TypeError('Lengthlllllll must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    // verify the new students are array strings and set new students
    if (Object.getPrototypeOf(newStudents) !== Array.prototype && String.prototype) throw TypeError('Students must be an array of strings');
    this._students = newStudents;
  }
}
