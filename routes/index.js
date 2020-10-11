/**
 * External dependencies
 */
const Router = require('koa-router');

/**
 * Internal dependencies
 */
const createCreditCard = require('../app/routes/creditCards/createCreditCard');
const getCreditCards = require('../app/routes/creditCards/getCreditCards');
const getCreditCardsByCardNumber = require('../app/routes/creditCards/getCreditCardsByCardNumber');

const router = new Router();

/* GET users listing. */

router.get('/creditCard', getCreditCards);
router.post('/creditCard', createCreditCard);
router.get('/creditCard/:cardNumber', getCreditCardsByCardNumber);

module.exports = router;