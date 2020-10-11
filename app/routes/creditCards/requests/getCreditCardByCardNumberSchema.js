const Joi = require('joi');

/**
 * Validating request and defining default values.
 */
const getCreditCardByCardNumberSchema = Joi.object().keys({
  params: Joi.object({
    cardNumber: Joi.number()
      .min(0)
      .required(),
  }).required(),
});

module.exports = getCreditCardByCardNumberSchema;
