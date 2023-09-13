export default class Car {
  constructor(brand, motor, color) {
    // Initialise les attributs de la classe
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters et Setters pour les attributs
  get brand() {
    return this._brand;
  }

  set brand(value) {
    // Vérifie que la valeur passée est de type 'String'
    if (typeof value !== 'string') {
      throw new TypeError('Brand must be a String');
    }

    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    // Vérifie que la valeur passée est de type 'String'
    if (typeof value !== 'string') {
      throw new TypeError('Motor must be a String');
    }

    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    // Vérifie que la valeur passée est de type 'String'
    if (typeof value !== 'string') {
      throw new TypeError('Color must be a String');
    }

    this._color = value;
  }

  /**
   * Clone l'objet et retourne une nouvelle instance du même type
   * en utilisant 'this.constructor'.
   * pour garantir que le nouvel objet est du même type,
   */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
