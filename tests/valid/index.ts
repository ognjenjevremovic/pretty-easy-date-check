//  Tests
import { dateString } from './string';
import { dateObject } from './dateObject';


//  Check Block
export function validDateValues() {
    describe('Value passed is a valid Date', () => {
        dateString();
        dateObject();
    });
}
