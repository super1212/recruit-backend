/**
 * External dependencies
 */
const { BadRequest } = require('http-errors');
/**
 * Internal dependencies
 */

/**
 * Models
 */

/**
 * Repositories
 */
const CreditCardRepository = require('../repositories/CreditCardRepository');
/**
 * Create a CreditCard
 */
class CreateCreditCard {
  /**
   * @param {Object} data
   * @param {String} data.name
   * @param {Number} data.cardNumber
   * @param {Number} data.cvc
   * @param {String} data.expiry
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Insert a vatiant unit
   */
  async create() {
    this.validateData();
    return CreditCardRepository.create(this.data);
  }

  /**
   * Validate data
   * -- the expiry must be a number
   * -- the expiry must be 4 length
   * -- the expiry must be the top 2 must be a month number
   * -- the expiry must be the last 2 must be a year number
   */
  validateData() {
    const number = /^\d+$/;
    if (
      !number.test(this.data.expiry) ||
      this.data.expiry.toString().length != 4 ||
      parseInt(this.data.expiry.toString().slice(0, 2)) <= 0 ||
      parseInt(this.data.expiry.toString().slice(0, 2)) > 12
    ) {
      throw new BadRequest('The expiry is invalid');
    }
  }
}

module.exports = CreateCreditCard;
