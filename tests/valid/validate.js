"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var dist_1 = require("../../dist");
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
    it(shouldReturnString + " " + info, function () { return assert.equal(dist_1.default(value), true); });
}
exports.validDateValue_returnsTrue = validDateValue_returnsTrue;
//# sourceMappingURL=validate.js.map