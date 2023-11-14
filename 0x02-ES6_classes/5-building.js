// Implement a class named Building.
export default class Building {
  /**
   * @param {number} sqft - size of building
   * Implement a getter and setter for sqft
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

