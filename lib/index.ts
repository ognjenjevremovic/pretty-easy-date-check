//  Dependancies
import { months } from './months';

//  Expected types
export type param = string | Date;

//  References
const getMonth  : () => number = Date.prototype.getDate;
const getYear   : () => number = Date.prototype.getFullYear;
const toStr     : () => string = Object.prototype.toString;


//  Date object str
 const dateStr   : string = '[object Date]';

//  Check if parameter passed is instance of Date Class
function dateObject(value: Date): boolean {
    //  Not
    if(!(value instanceof Date)) return false;

    //  Double check
    try {
        return (getMonth.call(value) && getYear.call(value) && (toStr.call(value) === dateStr)) ? true : false;
    } catch(err) {
        return false;
    }
}
//  String representation of date
function stringDate(value: string): boolean {
    //  Not
    if(!value.length) return false;

    //  MM.DD.YYYY. - format [.,/-]
    if(value.length < 12) {
        const date  : string[]  = value.split(/[.]|[,]|[/]|[-]|\s/g);
        const month : number    = +date[0];
        const day   : number    = +date[1];

        let isValid: boolean;
        for(const _month of months) {
            (_month.ord >= month && _month.days >= day) ? isValid = true : isValid = false;
        }

        return isValid ? !isNaN(Date.parse(value)) : false;
    }

    //  YYYY-MM-DDTTT:HH:MM.SSSZ - format
    else return !isNaN(Date.parse(value));
}

//  Module
export default function isDate(value: param): boolean {
    if  (typeof value === 'string') return stringDate(value);
    else if (typeof value === 'object' && value !== null) return dateObject(value);
    else return false;
}
