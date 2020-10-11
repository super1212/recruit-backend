/**
 * External dependencies
 */
const Joi = require('joi');
const { BadRequest } = require('http-errors');

/**
 * Internal dependencies
 */
const createCreditCardSchema = require('./requests/createCreditCardSchema');
const CreateCreditCard = require('./lib/CreateCreditCard');

/**
 * Create a user
 *
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports = async ctx => {
  const {
    request: { body },
  } = ctx;
  console.log(body);
  /**
   * Validate input
   */
  const { error, value } = Joi.validate({ body }, createCreditCardSchema);

  if (error !== null) {
    throw new BadRequest(error.message);
  }

  const creditCart = await new CreateCreditCard(body).create();
  ctx.status = 201;
  ctx.body = creditCart;
};
