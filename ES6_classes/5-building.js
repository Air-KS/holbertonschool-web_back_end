export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building || !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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
