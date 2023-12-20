const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n
    .toString()
    .split('')
    .map((digit) => Number(digit));

  const min = Math.min.apply(null, digits);
  const index = digits.indexOf(min);
  const max = [
    ...digits.slice(0, index),
    ...digits.slice(index + 1, digits.length),
  ];

  return +max.join('');
}

module.exports = {
  deleteDigit,
};
