//  Dependancie
import * as assert from 'assert';
import { default as isValidDate } from '../..';


//  Should return an Array of numbers
const shouldReturnString: string = 'Should return a boolean true ->';


/**
 * @description
 *  Check if the value returned
 *  is a boolean value true
 *
 * @param {string} info
 * @param {string|Date} value
 * @returns {*}
 */
export function validDateValue_returnsTrue(info: string, value: string | Date): void {
    it(`${shouldReturnString} ${info}`, () =>  assert.equal(isValidDate(value), true));
}
