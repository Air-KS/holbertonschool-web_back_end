export default class HolbertonCourse {
  // Le constructeur pour initialiser les attribues de la classe
  constructor(name, length, students) {
    // Gère les types d'erreurs
    if (typeof name !== 'string' || typeof length !== 'number' || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Invalid types for the course parameters');
    }
    // Les attribues de classes.
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters et Setters pour les attributs

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // lenght
  get lenght() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // students
  get students() {
    return this._students;
  }

  set students(studentsArray) {
    if (!studentsArray.every((student) => typeof student === 'string')) {
      throw new TypeError('Students array must contain only strings');
    }
    this._students = studentsArray;
  }
}
