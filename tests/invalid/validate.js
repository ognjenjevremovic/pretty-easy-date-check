"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var __1 = require("../..");
//  Should return an Error
var shouldReturnError = 'Should return a boolean false ->';
/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {*} value
 * @returns {*}
 */
function invalidDateValue_returnsFalse(info, value) {
    it(shouldReturnError + " " + info, function () {
        //  Does not throw an error
        assert.doesNotThrow(function () { return __1.default(value); }, Error);
        //  But returns an instance of Error class
        assert.deepEqual(function () { return __1.default(value); }, new Error('error'));
    });
}
exports.invalidDateValue_returnsFalse = invalidDateValue_returnsFalse;
//# sourceMappingURL=validate.js.map