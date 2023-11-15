/**
 * A function named hasValuesFromArray that returns a boolean 
 *
 * @param {Set} and @param {Array}
 * @return {boolean} True
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
