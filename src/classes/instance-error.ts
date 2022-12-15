/**
 * @class InstanceError
 * This class will be responsible to throw the instance related issue
 */
export default class InstanceError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
