const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let answer = (str === null) ? 'null' : str+'';
  let addition = (options.addition === undefined) ? '': (options.addition === null) ? 'null' : options.addition+'';
  let answer_total = answer,
      addition_total = addition;

  if (options.separator === undefined) {options.separator = '+'}
  if (options.additionSeparator === undefined) {options.additionSeparator = '|'}

  for (let j = 0; j < options.additionRepeatTimes-1; j++) {
    addition_total = addition_total + options.additionSeparator.toString() + addition
  }

  for (let i = 0; i < options.repeatTimes-1; i++) {
    answer_total = answer_total + addition_total + options.separator.toString()  + answer
  }
  return answer_total+addition_total
};
