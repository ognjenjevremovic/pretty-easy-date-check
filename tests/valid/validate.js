"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var isValidDate = require("../..");
//  Should return an Array of numbers
var shouldReturnString = 'Should return a boolean true ->';
/**
 * @description
 *  Check if the value returned
 *  is a boolean value true
 *
 * @param {string} info
 * @param {string|Date} value
 * @returns {*}
 */
function validDateValue_returnsTrue(info, value) {
    it(shouldReturnString + " " + info, function () { return assert.equal(isValidDate(value), true); });
}
exports.validDateValue_returnsTrue = validDateValue_returnsTrue;
//# sourceMappingURL=validate.js.map