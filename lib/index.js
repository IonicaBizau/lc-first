"use strict";

/**
 * lcFirst
 * Lowercase the first character in the string.
 *
 * @name lcFirst
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function lcFirst (input) {
    return input[0].toLowerCase() + input.slice(1);
};
