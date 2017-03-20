//  Dependancies
import { validDateValue_returnsTrue } from './validate';


//  Instance of Date
export function dateObject() {
    describe('Date Object', () => {

        //  More info
        const info: string = 'from an instance of Date class';

        validDateValue_returnsTrue(info, new Date());
        validDateValue_returnsTrue(info, new Date('03.04.2017.'));
        validDateValue_returnsTrue(info, new Date(1490020964434));
    });
}
