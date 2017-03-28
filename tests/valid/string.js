"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  Valid date strings
function dateString() {
    describe('Date String', function () {
        //  More info
        var info = 'from Date string';
        validate_1.validDateValue_returnsTrue(info, '03.04.2017.');
        validate_1.validDateValue_returnsTrue(info, '03,04,2017');
        validate_1.validDateValue_returnsTrue(info, '03/04/2017');
        validate_1.validDateValue_returnsTrue(info, '03-04-2017');
        validate_1.validDateValue_returnsTrue(info, '03 04 2017');
        validate_1.validDateValue_returnsTrue(info, '3.4.17.');
        validate_1.validDateValue_returnsTrue(info, '3,4,17');
        validate_1.validDateValue_returnsTrue(info, '3/4/17');
        validate_1.validDateValue_returnsTrue(info, '3-4-17');
        validate_1.validDateValue_returnsTrue(info, '3 4 17');
        validate_1.validDateValue_returnsTrue(info, 'Mon Mar 20 2017');
        validate_1.validDateValue_returnsTrue(info, 'Mon March 20 2017');
        validate_1.validDateValue_returnsTrue(info, 'Mon Mar 20 2017 15:38:55');
        validate_1.validDateValue_returnsTrue(info, 'Monday March 20 2017 15:38:55');
        validate_1.validDateValue_returnsTrue(info, 'Mar 20 17');
        validate_1.validDateValue_returnsTrue(info, 'March 20 17');
        validate_1.validDateValue_returnsTrue(info, 'Mar 20 17 15:38:55');
        validate_1.validDateValue_returnsTrue(info, 'March 20 2017 15:38:55');
        validate_1.validDateValue_returnsTrue(info, new Date().toString());
    });
}
exports.dateString = dateString;
//# sourceMappingURL=string.js.map