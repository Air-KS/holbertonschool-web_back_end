class HolbertonCourse {
  // Le constructeur pour initialiser les attribues de la classe
  consrtructor(name, lenght, students) {
    // Gère les types d'erreurs
    if (typeof name !== 'string' || typeof lenght !== 'number' || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Invalid types for the course parameters')
    }
    // Les attribues de classes.
    this._name = name;
    this._lenght =  lenght;
    this._students = students;
  }

  // Getters et Setters pour les attributs

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string')
    }
    this._name = value;
  }

  // lenght
  get lenght() {
    return this._lenght;
  }

  set lenght(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Lenght must be a number')
    }
    this._lenght = value;
  }

  // students
  get students() {
    return this._students;
  }

  set students(studentsArray) {
    if (!studentsArray.every(student => typeof student === 'string')) {
      throw new TypeError('Students array must contain only strings')
    }
    this._students = studentsArray;
  }
}
