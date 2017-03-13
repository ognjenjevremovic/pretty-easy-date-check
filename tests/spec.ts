//  Dependancies
import * as assert from 'assert';
import isDate from '../lib/index';


//  For test purposes only
declare function isDate(value?: any): boolean;


//  Console message outputs
const date      = 'Value provided is a valid Date';
const notDate   = 'Value provided is not a valid Date';

//  Test - Not valid dates
describe('Values are not valid dates', () => {

    //  undefined
    it('should return false - undefined', () => {
        assert.notEqual(isDate(), true, date);
        assert.notEqual(isDate(undefined), true, date);
    });

    //  null
    it('should return false - null', () => {
        assert.notEqual(isDate(null), true, date);
    });

    //  false
    it('should return false - false', () => {
        assert.notEqual(isDate(false), true, date);
    });

    //  empty string
    it('should return false - empty string', () => {
        assert.notEqual(isDate(''), true, date);
    });

    //  random strings
    it('should return false - non valid date string', () => {
        assert.notEqual(isDate('random'), true, date);
        assert.notEqual(isDate('sample string with a lot of characters'), true, date);
    });

    //  numbers
    it('should return false - number', () => {
        assert.notEqual(isDate(0), true, date);
        assert.notEqual(isDate(25), true, date);
    });

    //  arrays
    it('should return false - array', () => {
        assert.notEqual(isDate([]), true, date);
        assert.notEqual(isDate(['some', 'random', 'values', 25, false]), true, date);
    });

    //  Object literals
    it('should return false - non Date object', () => {
        assert.notEqual(isDate({}), true, date);
        assert.notEqual(isDate({foo: 'bar', baz: 'badoom'}), true, date);
    });

    //  function
    it('should return false - function', () => {
        assert.notEqual(isDate(() => { }), true, date);
    });

    //  invalid date string (month > 12)
    it('should return false - invalid date (high month values)', () => {
        assert.notEqual(isDate('17.09.2015'), true, date);
        assert.notEqual(isDate('17,09,2015'), true, date);
        assert.notEqual(isDate('17-09-2015'), true, date);
        assert.notEqual(isDate('17/09/2015'), true, date);
        assert.notEqual(isDate('17 09 2015'), true, date);
    });

    //  invalid date string (day > 31)
    it('should return false - invalid date (high day values)', () => {
        assert.notEqual(isDate('07.32.2015'), true, date);
        assert.notEqual(isDate('07,32,2015'), true, date);
        assert.notEqual(isDate('07-32-2015'), true, date);
        assert.notEqual(isDate('07/32/2015'), true, date);
        assert.notEqual(isDate('07 32 2015'), true, date);
    });

});

//  Test - valid Dates
describe('Values are valid dates', () => {

    //  Instance of Date
    it('should return true - instance of Date', () => {
        assert.equal(isDate(new Date()), true, date);
    });

    //  Valid strings
    it('should return true - valid string date', () => {
        assert.equal(isDate('9.17.15'), true, notDate);
        assert.equal(isDate('9,17,15'), true, notDate);
        assert.equal(isDate('9/17/15'), true, notDate);
        assert.equal(isDate('9-17-15'), true, notDate);
        assert.equal(isDate('9 17 15'), true, notDate);
        assert.equal(isDate('09.17.2015'), true, notDate);
        assert.equal(isDate('Thu Mar 9 17'), true, notDate);
        assert.equal(isDate('Thu Mar 09 2017'), true, notDate);
        assert.equal(isDate(new Date().toString()), true, notDate)
    });

});
