const {
  NotImplementedError
} = require('../extensions/index.js');

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
  const res = [];
  let temp = n.toString();
  n.toString().split('').forEach((item, i) => {

    res.push(temp.slice(0, i) + temp.slice(i + 1));
  });
  return Math.max(...res.map(item => +item));
}

module.exports = {
  deleteDigit
};