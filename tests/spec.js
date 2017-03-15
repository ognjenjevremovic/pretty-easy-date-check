"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
var isValidDate = require("..");
//  Console message outputs
var date = 'Value provided is a valid Date';
var notDate = 'Value provided is not a valid Date';
//  Test - Not valid dates
describe('Values are not valid dates', function () {
    //  undefined
    it('should return false - undefined', function () {
        assert.notEqual(isValidDate(), true, date);
        assert.notEqual(isValidDate(undefined), true, date);
    });
    //  null
    it('should return false - null', function () {
        assert.notEqual(isValidDate(null), true, date);
    });
    //  false
    it('should return false - false', function () {
        assert.notEqual(isValidDate(false), true, date);
    });
    //  empty string
    it('should return false - empty string', function () {
        assert.notEqual(isValidDate(''), true, date);
    });
    //  random strings
    it('should return false - non valid date string', function () {
        assert.notEqual(isValidDate('random'), true, date);
        assert.notEqual(isValidDate('sample string with a lot of characters'), true, date);
    });
    //  numbers
    it('should return false - number', function () {
        assert.notEqual(isValidDate(0), true, date);
        assert.notEqual(isValidDate(25), true, date);
    });
    //  arrays
    it('should return false - array', function () {
        assert.notEqual(isValidDate([]), true, date);
        assert.notEqual(isValidDate(['some', 'random', 'values', 25, false]), true, date);
    });
    //  Object literals
    it('should return false - non Date object', function () {
        assert.notEqual(isValidDate({}), true, date);
        assert.notEqual(isValidDate({ foo: 'bar', baz: 'badoom' }), true, date);
    });
    //  function
    it('should return false - function', function () {
        assert.notEqual(isValidDate(function () { }), true, date);
    });
    //  invalid date string (month > 12)
    it('should return false - invalid date (high month values)', function () {
        assert.notEqual(isValidDate('17.09.2015'), true, date);
        assert.notEqual(isValidDate('17,09,2015'), true, date);
        assert.notEqual(isValidDate('17-09-2015'), true, date);
        assert.notEqual(isValidDate('17/09/2015'), true, date);
        assert.notEqual(isValidDate('17 09 2015'), true, date);
    });
    //  invalid date string (day > 31)
    it('should return false - invalid date (high day values)', function () {
        assert.notEqual(isValidDate('07.32.2015'), true, date);
        assert.notEqual(isValidDate('07,32,2015'), true, date);
        assert.notEqual(isValidDate('07-32-2015'), true, date);
        assert.notEqual(isValidDate('07/32/2015'), true, date);
        assert.notEqual(isValidDate('07 32 2015'), true, date);
    });
});
//  Test - valid Dates
describe('Values are valid dates', function () {
    //  Instance of Date
    it('should return true - instance of Date', function () {
        assert.equal(isValidDate(new Date()), true, date);
    });
    //  Valid strings
    it('should return true - valid string date', function () {
        assert.equal(isValidDate('9.17.15'), true, notDate);
        assert.equal(isValidDate('9,17,15'), true, notDate);
        assert.equal(isValidDate('9/17/15'), true, notDate);
        assert.equal(isValidDate('9-17-15'), true, notDate);
        assert.equal(isValidDate('9 17 15'), true, notDate);
        assert.equal(isValidDate('09.17.2015'), true, notDate);
        assert.equal(isValidDate('Thu Mar 9 17'), true, notDate);
        assert.equal(isValidDate('Thu Mar 09 2017'), true, notDate);
        assert.equal(isValidDate(new Date().toString()), true, notDate);
    });
});
//# sourceMappingURL=spec.js.map