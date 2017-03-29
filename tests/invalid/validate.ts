//  Dependancie
import * as assert from 'assert';
import { default as isValidDate } from '../../dist';


//  Should return an Error
const shouldReturnError: string = 'Should return a boolean false ->';


/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {*} value
 * @returns {*}
 */
export function invalidDateValue_returnsFalse(info: string, value?: any): void {
    it(`${shouldReturnError} ${info}`, () => {
        //  Does not throw an error
        assert.doesNotThrow(() => isValidDate(value), Error);
        //  But returns an instance of Error class
        assert.deepEqual(() => isValidDate(value), new Error('error'));
    });
}
