"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var months_1 = require("./months");
/**
 * @description
 *  Check if the value is a valid
 *  string representation of a Date
 *
 * @param {string} value
 * @returns {boolean}
 */
function stringDate(value) {
    //  Empty string
    if (!value.length)
        return false;
    //  MM.DD.YYYY. - format
    //  valid separators -> . , / - \s
    if (value.search(/[.,/\\-]/g) > -1) {
        var date = value.split(/[.,/-\s]/g);
        var month = +date[0];
        var day = +date[1];
        var isValid = void 0;
        for (var _i = 0, months_2 = months_1.months; _i < months_2.length; _i++) {
            var _month = months_2[_i];
            (_month.ord >= month && _month.days >= day) ? isValid = true : isValid = false;
        }
        return isValid ? !isNaN(Date.parse(value)) : false;
    }
    //  YYYY-MM-DDTTT:HH:MM.SSSZ - format
    return !isNaN(Date.parse(value));
}
exports.stringDate = stringDate;
//# sourceMappingURL=makeDate.js.map