const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const inx = email.lastIndexOf(email.split('').find((el) => el === '@'));
  return email.slice(inx + 1);
}

module.exports = {
  getEmailDomain,
};
