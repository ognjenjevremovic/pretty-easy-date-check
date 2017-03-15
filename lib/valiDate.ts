//  Dependancies
import { isString, isDate } from 'pretty-easy-data-types';
import { months } from './months';


//  Expected types
export type param = string | Date;


/**
 * @description
 *  Check if the value is a valid
 *  string representation of a Date
 *
 * @param {string} value
 * @returns {boolean}
 */
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


/**
 * @description
 *  Check if the value passed is a valid
 *  representation of a Date
 *
 * @export
 * @param {param} value
 * @returns {boolean}
 */
export function isValidDate(value: param): boolean {
    if  (isString(value)) return stringDate(value as string);
    else if (isDate(value)) return true;
    else return false;
}
