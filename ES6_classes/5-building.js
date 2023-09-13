export default class Building {
  // Gère les erreurs et initialise les attributs de la classe
  constructor(sqft) {
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // Les attributs de classe
    this._sqft = sqft;
  }

  // Getters et Setters pour les attributs

  // sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
