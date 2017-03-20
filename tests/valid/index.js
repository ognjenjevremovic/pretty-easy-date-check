"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var string_1 = require("./string");
var dateObject_1 = require("./dateObject");
//  Check Block
function validDateValues() {
    describe('Value passed is a valid Date', function () {
        string_1.dateString();
        dateObject_1.dateObject();
    });
}
exports.validDateValues = validDateValues;
//# sourceMappingURL=index.js.map