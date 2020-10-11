/**
 * External dependencies
 */
const Joi = require('joi');
const { BadRequest } = require('http-errors');

/**
 * Internal dependencies
 */
const getCreditCardByCardNumberSchema = require('./requests/getCreditCardByCardNumberSchema');
const GetCreditCardByCardNumber = require('./lib/GetCreditCardByCardNumber');

/**
 * Get a credit cart by card number
 *
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports = async ctx => {
  console.log('Get a credit cart by card number start:');
  const params = ctx.params;

  console.log('params:', params);
  /**
   * Validate input
   */
  const { error, value } = Joi.validate({ params }, getCreditCardByCardNumberSchema);

  if (error !== null) {
    throw new BadRequest(error.message);
  }

  const creditCard = await new GetCreditCardByCardNumber(params).get();
  ctx.status = 200;
  ctx.body = creditCard;
};
