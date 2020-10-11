const Joi = require('joi');

/**
 * Validating request and defining default values.
 */
const createCreditCardSchema = Joi.object().keys({
  body: Joi.object({
    name: Joi.string().max(50).required(),
    cardNumber: Joi.number().required(),
    cvc: Joi.number().min(1).required(),
    expiry: Joi.number()
      .min(1)
      .required(),
  }).required(),
});

module.exports = createCreditCardSchema;
