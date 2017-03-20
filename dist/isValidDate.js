"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var pretty_easy_data_types_1 = require("pretty-easy-data-types");
var makeDate_1 = require("./makeDate");
/**
 * @description
 *  Check if the value passed is a valid
 *  representation of a Date
 *  instance of Date class or date in a String like format
 *
 * @export
 * @param {param} value
 * @returns {boolean}
 */
function isValidDate(value) {
    if (pretty_easy_data_types_1.isString(value))
        return makeDate_1.stringDate(value);
    else if (pretty_easy_data_types_1.isDate(value))
        return true;
    else
        return false;
}
exports.isValidDate = isValidDate;
//# sourceMappingURL=isValidDate.js.map