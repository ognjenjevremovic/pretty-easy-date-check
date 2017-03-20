//  Dependancies
import { isString, isDate } from 'pretty-easy-data-types';
import { stringDate } from './makeDate';

//  Expected types
export type param = string | Date;


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
export function isValidDate(value: param): boolean {
    if  (isString(value)) return stringDate(value as string);
    else if (isDate(value)) return true;
    else return false;
}
