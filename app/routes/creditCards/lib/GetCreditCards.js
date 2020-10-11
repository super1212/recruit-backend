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
class GetCreditCards {
  /**
   * @param {Object} data
   * @param {Number} data.page
   * @param {Number} data.pageSize
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Insert a vatiant unit
   */
  async get() {
    return CreditCardRepository.getByPages(this.data.page, this.data.pageSize);
  }

}

module.exports = GetCreditCards;
