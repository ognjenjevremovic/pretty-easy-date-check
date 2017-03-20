"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  Random strings
function invalidStringValue() {
    describe('Invalid string value', function () {
        var info = 'from random string value';
        validate_1.invalidDateValue_returnsFalse(info, '');
        validate_1.invalidDateValue_returnsFalse(info, '   ');
        validate_1.invalidDateValue_returnsFalse(info, 'hello');
        validate_1.invalidDateValue_returnsFalse(info, 'this is not a date');
        validate_1.invalidDateValue_returnsFalse(info, '04042014');
    });
}
exports.invalidStringValue = invalidStringValue;
//# sourceMappingURL=string.js.map