//  Dependancies
import { invalidDateValue_returnsFalse } from './validate';


//  undefined
export function undefinedValue() {
    describe('undefined value', () => {
        invalidDateValue_returnsFalse('from undefined value');
        invalidDateValue_returnsFalse('from undefined value', undefined);
    });
}

//  null
export function nullValue() {
    describe('null value', () => {
        invalidDateValue_returnsFalse('from null value', null);
    });
}

//  boolean
export function booleanValue() {
    describe('boolean value', () => {
        invalidDateValue_returnsFalse('from boolean value', true);
        invalidDateValue_returnsFalse('from boolean balue', false);
    });
}

//  number
export function numberValue() {
    describe('number value', () => {
        invalidDateValue_returnsFalse('from number value', true);
        invalidDateValue_returnsFalse('from number balue', false);
    });
}

//  function
export function functionValue() {
    describe('Function', () => {
        invalidDateValue_returnsFalse('from function', () => { });
        invalidDateValue_returnsFalse('from function', () => true);
        invalidDateValue_returnsFalse('from function', () => 'rgb(12, 12, 50)');
    });
}

//  instance of Error class
export function errorObjectValue() {
    describe('instance of Error class', () => {
        invalidDateValue_returnsFalse('from Error object', new Error('invalid value'));
    });
}

//  Array
export function arrayValue() {
    describe('Array', () => {
        invalidDateValue_returnsFalse('from Array', []);
        invalidDateValue_returnsFalse('from Array', ['#f00']);
        invalidDateValue_returnsFalse('from Array', ['A7C', '#65C455']);
    });
}

//  Object
export function objectValue() {
    describe('Object', () => {
        invalidDateValue_returnsFalse('from Object', { });
        invalidDateValue_returnsFalse('from Object', { red: 'ff', green:  0, blue:   0 });
        invalidDateValue_returnsFalse('from Object', { red:   45, green: 79, blue: 'CC'});
    });
}
