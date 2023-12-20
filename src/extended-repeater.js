const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition =
    options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let repeatedString = '';

  for (let i = 0; i < repeatTimes; i++) {
    repeatedString += String(str);

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedString += addition;

      if (j < additionRepeatTimes - 1) {
        repeatedString += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      repeatedString += separator;
    }
  }

  return repeatedString;
}

module.exports = {
  repeater,
};
