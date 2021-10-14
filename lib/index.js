"use strict";

/**
 * lcFirst
 * Lowercase the first character in the string.
 *
 * @name lcFirst
 * @function
 * @param {String} input Input string.
 * @return {String} Output string.
 */
module.exports = function lcFirst (input) {
    if (!input || !input.length || typeof input !== "string") {
        return "";
    }
    return input.charAt(0).toLowerCase() + input.slice(1);
};
