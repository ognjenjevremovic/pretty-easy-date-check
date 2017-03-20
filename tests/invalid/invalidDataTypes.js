"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  undefined
function undefinedValue() {
    describe('undefined value', function () {
        validate_1.invalidDateValue_returnsFalse('from undefined value');
        validate_1.invalidDateValue_returnsFalse('from undefined value', undefined);
    });
}
exports.undefinedValue = undefinedValue;
//  null
function nullValue() {
    describe('null value', function () {
        validate_1.invalidDateValue_returnsFalse('from null value', null);
    });
}
exports.nullValue = nullValue;
//  boolean
function booleanValue() {
    describe('boolean value', function () {
        validate_1.invalidDateValue_returnsFalse('from boolean value', true);
        validate_1.invalidDateValue_returnsFalse('from boolean balue', false);
    });
}
exports.booleanValue = booleanValue;
//  number
function numberValue() {
    describe('number value', function () {
        validate_1.invalidDateValue_returnsFalse('from number value', true);
        validate_1.invalidDateValue_returnsFalse('from number balue', false);
    });
}
exports.numberValue = numberValue;
//  function
function functionValue() {
    describe('Function', function () {
        validate_1.invalidDateValue_returnsFalse('from function', function () { });
        validate_1.invalidDateValue_returnsFalse('from function', function () { return true; });
        validate_1.invalidDateValue_returnsFalse('from function', function () { return 'rgb(12, 12, 50)'; });
    });
}
exports.functionValue = functionValue;
//  instance of Error class
function errorObjectValue() {
    describe('instance of Error class', function () {
        validate_1.invalidDateValue_returnsFalse('from Error object', new Error('invalid value'));
    });
}
exports.errorObjectValue = errorObjectValue;
//  Array
function arrayValue() {
    describe('Array', function () {
        validate_1.invalidDateValue_returnsFalse('from Array', []);
        validate_1.invalidDateValue_returnsFalse('from Array', ['#f00']);
        validate_1.invalidDateValue_returnsFalse('from Array', ['A7C', '#65C455']);
    });
}
exports.arrayValue = arrayValue;
//  Object
function objectValue() {
    describe('Object', function () {
        validate_1.invalidDateValue_returnsFalse('from Object', {});
        validate_1.invalidDateValue_returnsFalse('from Object', { red: 'ff', green: 0, blue: 0 });
        validate_1.invalidDateValue_returnsFalse('from Object', { red: 45, green: 79, blue: 'CC' });
    });
}
exports.objectValue = objectValue;
//# sourceMappingURL=invalidDataTypes.js.map