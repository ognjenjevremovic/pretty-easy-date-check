"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
const months_1 = require("./months");
//  References
const getDay = Date.prototype.getDay;
const getMonth = Date.prototype.getDate;
const getYear = Date.prototype.getFullYear;
const toStr = Object.prototype.toString;
//  Date object str
const dateStr = '[object Date]';
//  Check if parameter passed is instance of Date Class
function dateObject(value) {
    //  Not
    if (!(value instanceof Date))
        return false;
    //  Double check
    try {
        return (getDay.call(value) && getMonth.call(value) && getYear.call(value) && (toStr.call(value) === dateStr)) ? true : false;
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
        const date = value.split(/[.]|[,]|[/]|[-]|\s/g);
        const month = +date[0];
        const day = +date[1];
        let isValid;
        for (const _month of months_1.default) {
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
    else if (typeof value === 'object' || value === null)
        return dateObject(value);
    else
        return false;
}
exports.default = isDate;