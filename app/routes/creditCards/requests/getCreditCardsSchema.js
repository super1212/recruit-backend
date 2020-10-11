const Joi = require('joi');

/**
 * Validating request and defining default values.
 */
const getCreditCardsSchema = Joi.object().keys({
  parameters: Joi.object({
    page: Joi.string()
      .min(0)
      .required(),
    pageSize: Joi.number()
      .min(10)
      .max(100)
      .required(),
  }).required(),
});

module.exports = getCreditCardsSchema;
