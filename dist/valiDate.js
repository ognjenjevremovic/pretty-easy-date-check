"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var pretty_easy_data_types_1 = require("pretty-easy-data-types");
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
    //  Not
    if (!value.length)
        return false;
    //  MM.DD.YYYY. - format [.,/-]
    if (value.length < 12) {
        var date = value.split(/[.]|[,]|[/]|[-]|\s/g);
        var month = +date[0];
        var day = +date[1];
        var isValid = void 0;
        for (var _i = 0, months_2 = months_1.months; _i < months_2.length; _i++) {
            var _month = months_2[_i];
            (_month.ord >= month && _month.days >= day) ? isValid = true : isValid = false;
        }
        return isValid ? !isNaN(Date.parse(value)) : false;
    }
    else
        return !isNaN(Date.parse(value));
}
/**
 * @description
 *  Check if the value passed is a valid
 *  representation of a Date
 *
 * @export
 * @param {param} value
 * @returns {boolean}
 */
function isValidDate(value) {
    if (pretty_easy_data_types_1.isString(value))
        return stringDate(value);
    else if (pretty_easy_data_types_1.isDate(value))
        return true;
    else
        return false;
}
exports.isValidDate = isValidDate;
//# sourceMappingURL=valiDate.js.map