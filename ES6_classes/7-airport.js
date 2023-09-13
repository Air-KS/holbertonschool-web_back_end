export default class Airport {
  constructor(name, code) {
    // Gère les erreurs et initialise les attributs de la classe
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }

    // Les attributs de classe
    this._name = name;
    this._code = code;
  }

  // Getters et Setters pour les attributs

  // Name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /**
   * Convertit l'objet Airport en une chaîne de caractères
   * sous la forme [object CODE], où CODE est le code de l'aéroport.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
