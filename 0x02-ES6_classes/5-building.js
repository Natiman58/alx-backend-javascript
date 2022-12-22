/**
 @construct
 @abstract
 */

export default class Building {
  constructor(sqft) {
    // To make sure any class the extends from this class uses the method 'evacuationWarningMessage'
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
