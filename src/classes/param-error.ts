/**
 * @class ParamError
 * This class will be responsible to throw the parameter related issue
 */
export default class ParamError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
