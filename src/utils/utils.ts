/**
 * This file contains the utility type, interfaces and methods which will help in the library
 */

declare global {
  interface String {
    format(...replacements: string[]): string;
  }
}

if (!String.prototype.format) {
  String.prototype.format = function () {
    const args = arguments;
    return this.replace(/{(\d+)}/g, (match, num) => {
      return typeof args[num] !== 'undefined' ? args[num] : match;
    });
  };
}

/**
 * This method will check if value is defined or not.
 * TODO: Check if we can use Validator.isUndefined instead of creating this method.
 * @param {any} value Value to be verify for the undefined.
 * @returns {boolean}
 */
export const isUndefined = (value: any = undefined) => {
  if (value === undefined || value === null) {
    return true;
  }
  return false;
};
