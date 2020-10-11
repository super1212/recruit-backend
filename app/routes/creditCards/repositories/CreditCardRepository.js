/**
 * Models
 */

/**
 * CreditCardRepository
 */
class CreditCardRepository {
  /**
   * Create a credit Card
   */
  static async create(data) {
    console.log('Creata credit card:', data);
    return data;
  }

  /**
   * Get credit Cards
   * @param {Number} page
   * @param {Number} pageSize
   */
  static async getByPages(page, pageSize) {
    console.log('Get credit card:start');
    console.log('Get credit card:page:', page);
    console.log('Get credit card:pageSize:', pageSize);

    return {
      metadata: {
        page,
        pageSize,
        quantity: 1,
        total: 1,
      },
      data: [
        {
          name: 'Youfa',
          cardNumber: 1234567890123456789,
          cvc: 123,
          expiry: 1212,
        },
      ],
    };
  }
  /**
   * Get credit Card by card number
   * @param {Number} cardNumber
   */
  static async getByCardNumber(cardNumber) {
    console.log('Get credit card by card number: start');
    console.log('Get credit card by card number: cardNumber:', cardNumber);
    return {
      name: 'Youfa',
      cardNumber,
      cvc: 123,
      expiry: 1212,
    };
  }
}
module.exports = CreditCardRepository;
