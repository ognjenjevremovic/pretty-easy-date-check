//  Tests
import {
    undefinedValue,
    nullValue,
    booleanValue,
    numberValue,
    functionValue,
    errorObjectValue,
    arrayValue,
    objectValue
 } from './invalidDataTypes';
 import { invalidStringValue } from './string';


 //  Invalid data types
export function dataTypes() {
    describe('Value passed is of invalid data type', () => {
        undefinedValue();
        nullValue();
        booleanValue();
        numberValue();
        functionValue();
        errorObjectValue();
        arrayValue();
        objectValue();
    });
}

//  Invalid values
export function invalidValues() {
    describe('Value passed is of invalid value', () => {
        invalidStringValue();
    });
}
