"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  Instance of Date
function dateObject() {
    describe('Date Object', function () {
        //  More info
        var info = 'from an instance of Date class';
        validate_1.validDateValue_returnsTrue(info, new Date());
        validate_1.validDateValue_returnsTrue(info, new Date('03.04.2017.'));
        validate_1.validDateValue_returnsTrue(info, new Date(1490020964434));
    });
}
exports.dateObject = dateObject;
//# sourceMappingURL=dateObject.js.map