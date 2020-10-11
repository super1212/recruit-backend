/**
 * External dependencies
 */
const Joi = require('joi');
const { BadRequest } = require('http-errors');

/**
 * Internal dependencies
 */
const getCreditCardsSchema = require('./requests/getCreditCardsSchema');
const GetCreditCards = require('./lib/GetCreditCards');

/**
 * Get a credit cart by pages
 *
 * @param {object} event
 * @param {object} context
 * @param {function} callback
 */
module.exports = async ctx => {
  console.log('Get a credit cart by pages start:');
  const parameters = { page: ctx.request.query.page, pageSize: ctx.request.query.pageSize };

  console.log('parameters:', parameters);
  /**
   * Validate input
   */
  const { error, value } = Joi.validate({ parameters }, getCreditCardsSchema);

  if (error !== null) {
    throw new BadRequest(error.message);
  }

  const data = await new GetCreditCards(parameters).get();
  ctx.status = 200;
  ctx.body = data;
};
