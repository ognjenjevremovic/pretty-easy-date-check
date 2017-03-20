//  Dependancies
import { invalidValues, dataTypes as invalidDataTypes } from './invalid';
import { validDateValues } from './valid';


//  Test - Invalid data type (Returns a boolean false value)
describe('Invalid data type passed', invalidDataTypes);

//  Test - Invalid value (Returns a boolean false value)
describe('Invalid date value passed', invalidValues);

//  Test - Valid value (Returns a boolean true value)
describe('Valid date value passed', validDateValues);
