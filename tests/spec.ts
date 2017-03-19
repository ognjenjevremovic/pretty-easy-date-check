//  Dependancies
import * as assert from 'assert';
import * as isValidDate from '..';


//  For test purposes only
declare function isValidDate(value?: any): boolean;


//  Console message outputs
const date      = 'Value provided is a valid Date';
const notDate   = 'Value provided is not a valid Date';

/*
//  Test - Not valid dates
describe('Values are not valid dates', () => {

    //  undefined
    it('should return false - undefined', () => {
        assert.notEqual(isValidDate(), true, date);
        assert.notEqual(isValidDate(undefined), true, date);
    });

    //  null
    it('should return false - null', () => {
        assert.notEqual(isValidDate(null), true, date);
    });

    //  false
    it('should return false - false', () => {
        assert.notEqual(isValidDate(false), true, date);
    });

    //  empty string
    it('should return false - empty string', () => {
        assert.notEqual(isValidDate(''), true, date);
    });

    //  random strings
    it('should return false - non valid date string', () => {
        assert.notEqual(isValidDate('random'), true, date);
        assert.notEqual(isValidDate('sample string with a lot of characters'), true, date);
    });

    //  numbers
    it('should return false - number', () => {
        assert.notEqual(isValidDate(0), true, date);
        assert.notEqual(isValidDate(25), true, date);
    });

    //  arrays
    it('should return false - array', () => {
        assert.notEqual(isValidDate([]), true, date);
        assert.notEqual(isValidDate(['some', 'random', 'values', 25, false]), true, date);
    });

    //  Object literals
    it('should return false - non Date object', () => {
        assert.notEqual(isValidDate({}), true, date);
        assert.notEqual(isValidDate({foo: 'bar', baz: 'badoom'}), true, date);
    });

    //  function
    it('should return false - function', () => {
        assert.notEqual(isValidDate(() => { }), true, date);
    });

    //  invalid date string (month > 12)
    it('should return false - invalid date (high month values)', () => {
        assert.notEqual(isValidDate('17.09.2015'), true, date);
        assert.notEqual(isValidDate('17,09,2015'), true, date);
        assert.notEqual(isValidDate('17-09-2015'), true, date);
        assert.notEqual(isValidDate('17/09/2015'), true, date);
        assert.notEqual(isValidDate('17 09 2015'), true, date);
    });

    //  invalid date string (day > 31)
    it('should return false - invalid date (high day values)', () => {
        assert.notEqual(isValidDate('07.32.2015'), true, date);
        assert.notEqual(isValidDate('07,32,2015'), true, date);
        assert.notEqual(isValidDate('07-32-2015'), true, date);
        assert.notEqual(isValidDate('07/32/2015'), true, date);
        assert.notEqual(isValidDate('07 32 2015'), true, date);
    });

});

//  Test - valid Dates
describe('Values are valid dates', () => {

    //  Instance of Date
    it('should return true - instance of Date', () => {
        assert.equal(isValidDate(new Date()), true, date);
    });

    //  Valid strings
    it('should return true - valid string date', () => {
        assert.equal(isValidDate('9.17.15'), true, notDate);
        assert.equal(isValidDate('9,17,15'), true, notDate);
        assert.equal(isValidDate('9/17/15'), true, notDate);
        assert.equal(isValidDate('9-17-15'), true, notDate);
        assert.equal(isValidDate('9 17 15'), true, notDate);
        assert.equal(isValidDate('09.17.2015'), true, notDate);
        assert.equal(isValidDate('Thu Mar 9 17'), true, notDate);
        assert.equal(isValidDate('Thu Mar 09 2017'), true, notDate);
        assert.equal(isValidDate(new Date().toString()), true, notDate)
    });

});
*/

describe('Invalid data type passed', /** invalidDataTypes */);
describe('Invalid date value passed', /** invalidDataTypes */);
describe('Valid date value passed', /** invalidDataTypes */);
