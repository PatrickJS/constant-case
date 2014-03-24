var sentence = require('sentence-case');

/**
 * Constant case a string.
 *
 * @param  {String} string
 * @return {String}
 */
module.exports = function (string) {
  return sentence(string).toUpperCase().replace(/ /g, '_');
};
