export default class Building {
  // Gère les erreurs et initialise les attributs de la classe
  constructor(sqft) {

    // Les attributs de classe
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
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
