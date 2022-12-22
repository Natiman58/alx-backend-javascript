import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // To override the method 'evacuationWarningMessage' with another message
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    // eslint-disable-next-line no-template-curly-in-string
    return `Evacuate slowly the ${this._floors} floors`;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
}
