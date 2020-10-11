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
class GetCreditCardByCardNumber {
  /**
   * @param {Object} data
   * @param {Number} data.cardNumber
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Insert a vatiant unit
   */
  async get() {
    return CreditCardRepository.getByCardNumber(this.data.cardNumber);
  }
}

module.exports = GetCreditCardByCardNumber;
