//  Dependancies
import { months } from './months';


/**
 * @description
 *  Check if the value is a valid
 *  string representation of a Date
 *
 * @param {string} value
 * @returns {boolean}
 */
export function stringDate(value: string): boolean {
    //  Empty string
    if(!value.length) return false;

    //  MM.DD.YYYY. - format
    //  valid separators -> . , / - \s
    if(value.search(/[.,/\\-]/g) > -1) {
        const date  : string[]  = value.split(/[.,/-\s]/g);
        const month : number    = +date[0];
        const day   : number    = +date[1];

        let isValid: boolean;
        for(const _month of months) {
            (_month.ord >= month && _month.days >= day) ? isValid = true : isValid = false;
        }

        return isValid ? !isNaN(Date.parse(value)) : false;
    }

    //  YYYY-MM-DDTTT:HH:MM.SSSZ - format
    return !isNaN(Date.parse(value));
}
