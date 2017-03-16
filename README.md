# **pretty-easy-date-check**
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Tests][tests-image]][travis-url]

### *What is pretty-easy-date-check?*
***pretty-easy-date-check*** *is a simple NodeJS module for performing check against a supplied value to determine if it is a valid date (instance of Date class or a valid string representation of a date that can be used as a valid argument to instantiate the Date class!)*.

If you just want to check if the value is an instance of a Date class, consider using a [utility library](https://www.npmjs.com/package/pretty-easy-data-types) instead.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-date-check
```

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
let isDate = require('pretty-easy-date-check');
```
&nbsp

or if you use TypeScript
```typescript
import isDate from 'pretty-easy-date-check'
```
&nbsp

The module returns a function for you to call and supply it with parameter that you'd like to check if it is a valid Date or a string representation of a valid date (*see the examples of valid dates, down below*).
The function returns a Boolean.

&nbsp;

## Examples

### Valid dates
```javascript
isDate(new Date());               //  true
isDate('3.10.17');                //  true
isDate('03.10.2017.');            //  true
isDate('3,10,17');                //  true
isDate('03,10,2017');             //  true
isDate('3/10/17');                //  true
isDate('03/10/2017');             //  true
isDate('3-10-17');                //  true
isDate('03-10-2017');             //  true
isDate('Fri Mar 10 17');          //  true
isDate('Fri Mar 10 2017');        //  true
isDate(new Date().toString());    //  true

//  Pretty much, everything else should result in a false value
```

&nbsp;

### More flexible checks
```javascript
/*
*   For more flexible Date data type checks,
*   consider including a utility library, such as
*             pretty-easy-data-types
*
*   https://www.npmjs.com/package/pretty-easy-data-types
*/
const { 
    isDate,         //  check for instances of Date class
    isError         //  check for instances of Error class
} = require('pretty-easy-data-types');
const canBeDate  = require('pretty-easy-date-check');


//  Check if the value is the instance of a Date class
//  if it is, use it as the value
//  else if it is a valid string representation of a date
//  construct a new instance of the Date class
//  else construct a new instance of Error class and throw it
const sampleDate = 'not date';
const date = isDate(sampleDate) ? 
    sampleDate : 
    (canBeDate(sampleDate) ? new Date(sampleDate) : new Error('Invalid date!'));

//  Handle the error
if(isError(date)) console.log('Invalid date!');
//  Do something wit the date object
else console.log(`Valid date supplied`);
```

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-date-check) repository!

### Found a bug?
Please open a an [issue](https://github.com/ognjenjevremovic/pretty-easy-date-check/issues).

### License
Copyright (c) 2017 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-date-check/blob/master/LICENSE) License.

[npm-image]: https://img.shields.io/npm/v/pretty-easy-date-check.svg
[npm-url]: https://npmjs.org/package/pretty-easy-date-check
[travis-image]: https://img.shields.io/travis/ognjenjevremovic/pretty-easy-date-check/master.svg
[travis-url]: https://travis-ci.org/ognjenjevremovic/pretty-easy-date-check
[tests-image]: https://img.shields.io/badge/test-passing-green.svg