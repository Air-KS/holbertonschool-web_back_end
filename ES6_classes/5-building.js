export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage')
    }

    //
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
