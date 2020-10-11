/**
 * Set error
 *
 * @param {String} message Message to display
 * @param {Boolean} isNotFound If record isNotFound
 * @param {Boolean} isValidationError If record has ValidationErrors
 * @param {Boolean} isServiceUnavailable If record has ServiceUnavailable
 * @param {Boolean} isForBiddenError If record has isForBiddenError
 * @throws Exception when error
 */
module.exports = (
  message,
  isNotFound = false,
  isValidationError = false,
  isServiceUnavailable = false,
  isForBiddenError = false
) => {
  console.log('Error: ', message);

  this.error = {
    message,
    isNotFound,
    isValidationError,
    isServiceUnavailable,
    isForBiddenError,
  };
  throw this.error;
};
