"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var invalid_1 = require("./invalid");
var valid_1 = require("./valid");
//  Test - Invalid data type (Returns a boolean false value)
describe('Invalid data type passed', invalid_1.dataTypes);
//  Test - Invalid value (Returns a boolean false value)
describe('Invalid date value passed', invalid_1.invalidValues);
//  Test - Valid value (Returns a boolean true value)
describe('Valid date value passed', valid_1.validDateValues);
//# sourceMappingURL=spec.js.map