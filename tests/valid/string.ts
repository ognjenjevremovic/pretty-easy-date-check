//  Dependancies
import { validDateValue_returnsTrue } from './validate';


//  Valid date strings
export function dateString() {
    describe('Date String', () => {

        //  More info
        const info: string = 'from Date string';

        validDateValue_returnsTrue(info, '03.04.2017.');
        validDateValue_returnsTrue(info, '03,04,2017');
        validDateValue_returnsTrue(info, '03/04/2017');
        validDateValue_returnsTrue(info, '03-04-2017');
        validDateValue_returnsTrue(info, '03 04 2017');

        validDateValue_returnsTrue(info, '3.4.17.');
        validDateValue_returnsTrue(info, '3,4,17');
        validDateValue_returnsTrue(info, '3/4/17');
        validDateValue_returnsTrue(info, '3-4-17');
        validDateValue_returnsTrue(info, '3 4 17');

        validDateValue_returnsTrue(info, 'Mon Mar 20 2017');
        validDateValue_returnsTrue(info, 'Mon March 20 2017');
        validDateValue_returnsTrue(info, 'Mon Mar 20 2017 15:38:55');
        validDateValue_returnsTrue(info, 'Monday March 20 2017 15:38:55');

        validDateValue_returnsTrue(info, 'Mar 20 17');
        validDateValue_returnsTrue(info, 'March 20 17');
        validDateValue_returnsTrue(info, 'Mar 20 17 15:38:55');
        validDateValue_returnsTrue(info, 'March 20 2017 15:38:55');

        validDateValue_returnsTrue(info, new Date().toString());
    });
}
