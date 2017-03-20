//  Dependancies
import { invalidDateValue_returnsFalse } from './validate';


//  Random strings
export function invalidStringValue() {
    describe('Invalid string value', () => {

        const info: string = 'from random string value';

        invalidDateValue_returnsFalse(info, '');
        invalidDateValue_returnsFalse(info, '   ');
        invalidDateValue_returnsFalse(info, 'hello');
        invalidDateValue_returnsFalse(info, 'this is not a date');
        invalidDateValue_returnsFalse(info, '04042014');
    });
}
