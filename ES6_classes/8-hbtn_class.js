export default class HolbertonClass {
  constructor(size, location) {
    // Initialise les attributs de la classe
    this._size = size;
    this._location = location;
  }

  // Getters et Setters pour les attributs
  get size() {
    return this._size;
  }

  set size(value) {
    // Vérifie que la valeur passée est de type 'number'
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a Number');
    }

    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    // Vérifie que la valeur passée est de type 'string'
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a String');
    }

    this._location = value;
  }

  // Méthode pour gérer la conversion de l'objet en type primitif
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this._size : this._location;
  }
}
