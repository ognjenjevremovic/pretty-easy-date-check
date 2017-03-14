"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var months_1 = require("./months");
//  Checks
var getDay = Date.prototype.getDate;
var getMonth = function (value) {
    return (Date.prototype.getMonth.call(value) + 1);
};
var getYear = Date.prototype.getFullYear;
var toStr = Object.prototype.toString;
//  Date object str
var dateStr = '[object Date]';
//  Check if parameter passed is instance of Date Class
function dateObject(value) {
    //  Not
    if (!(value instanceof Date))
        return false;
    //  Double check
    try {
        return (getDay.call(value) && getMonth(value) && getYear.call(value) && (toStr.call(value) === dateStr)) ? true : false;
    }
    catch (err) {
        return false;
    }
}
//  String representation of date
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
//  Module
function isDate(value) {
    if (typeof value === 'string')
        return stringDate(value);
    else if (typeof value === 'object' && value !== null)
        return dateObject(value);
    else
        return false;
}
exports.default = isDate;
//# sourceMappingURL=index.js.map