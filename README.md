# **pretty-easy-date-check**

&nbsp;

[![NPM Version][npm-image]][npm-url]
[![Build Status - Travis CI][travis-image]][travis-url]
[![Build Status - Appveyor][appveyor-image]][appveyor-url]
[![Tests][tests-image]][travis-url]
[![Dependancies][dependancy-image]][dependancy-url]

### *What is pretty-easy-date-check?*
***pretty-easy-date-check*** *is a simple NodeJS module for performing check against a supplied value to determine if it is a valid date (instance of Date class or a valid string representation of a date that can be used as a valid argument to instantiate the Date class!)*.

If you just want to check if the value is an instance of a Date class, consider using a utility library such as [pretty-easy-data-types](https://www.npmjs.com/package/pretty-easy-data-types).

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
let isValidDate = require('pretty-easy-date-check');
```
&nbsp

or if you use TypeScript
```typescript
import isValidDate from 'pretty-easy-date-check'
```
&nbsp

The module returns a function for you to call and supply it with parameter that you'd like to check if it is a valid Date or a string representation of a valid date (*see the examples of valid dates, down below*).
The function returns a Boolean.

&nbsp;

## Examples

### Valid dates
```javascript
isValidDate(new Date());               //  true
isValidDate('3.10.17');                //  true
isValidDate('03.10.2017.');            //  true
isValidDate('3,10,17');                //  true
isValidDate('03,10,2017');             //  true
isValidDate('3/10/17');                //  true
isValidDate('03/10/2017');             //  true
isValidDate('3-10-17');                //  true
isValidDate('03-10-2017');             //  true
isValidDate('Fri Mar 10 17');          //  true
isValidDate('Fri Mar 10 2017');        //  true
isValidDate(new Date().toString());    //  true

//  Pretty much, everything else should result in a false value
```

&nbsp;

### More flexible checks
The module will return a boolean true if the value passed is :
 * an instance of Date constructor class or 
 * valid string representation of date

For more flexible Date data type checks, such as the ones for checking if the value is only an instance of a Date class and not a valid date string, consider including a utility library such as [pretty-easy-data-types](https://www.npmjs.com/package/pretty-easy-data-types).

```javascript
/*
*   Only import the checks you will be using,
*   instead of including the whole library
*/
const { 
    isDate,         //  check for instances of Date class
    isError         //  check for instances of Error class
} = require('pretty-easy-data-types');
const canBeDate  = require('pretty-easy-date-check');

/*
*   Check if the value is the instance of a Date class (and not a string representing a date)
*   and if so, in this example we're just going to use that instance of Date object
*   else we're checking if the value is a valid string representation of a date
*   and if so, we're going to instantiate a Date class with it 
*   else we're just going to construct a new instance of Error class
*/
const sampleDate = 'not date';
const date = isDate(sampleDate) ? 
    sampleDate : 
    (canBeDate(sampleDate) ? new Date(sampleDate) : new Error('Invalid date!'));

//  It is not an instance of Date; it's an Error
if(isError(date)) console.log(date.message);

//  It is a valid instance of Date class
else console.log(`Valid date supplied`);
```

&nbsp;

## Releases
The module follows the Semantic Versioning standard to communicate what kinds of changes are introduced in the new releases.

### Versioning
 * *Patch releases* : n.n.**X** -> Bug fixes, documentation updates, code cleanups, new test cases, optimization stuff and other minor changes that you should probably not be aware of;
 * *Minor releases* : n.**X**.n -> New feature(s) which don't break the existing ones. These ofter refer to minor TypeScript API changes (mainly due to declarations; JavaScript code will not be affected by these changes), code refactoring, some under the sheet changes that you should not worry about too much;
 * *Major releases* : **X**.n.n -> Changes that could *possibly* introduce the backwards compatibility issues. These are however very ***rare*** and could be relevant to you only in the case of an endpoint API change and the way you communicate with the module.

### Changelogs
 * **03/28** *v1.2.0* - Various improvements, new test cases, TypeScript API changes (due to definition updates) and documentation updates to reflect the changes
 * **03/20** *v1.1.3* - Support for Node < 1.8 abbandoned, modular approach to unit tests, new test cases and documentation updates to reflect the changes
 * **03/16** *v1.1.2* - Documenation updates
 * **03/15** *v1.1.1* - Documentation updates
 * **03/15** *v1.1.0* - Dependancy updates
 * **03/14** *v1.0.5* - Minor improvement
 * **03/13** *v1.0.4* - Typescript declaration conflicts
 * **03/13** *v1.0.3* - Additional test cases provided
 * **03/13** *v1.0.2* - Minor improvement
 * **03/12** *v1.0.1* - Bugfix (falsy values related)
 * **03/10** *v1.0.0* - Initial release

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
[appveyor-image]: https://ci.appveyor.com/api/projects/status/rt54ahmrxl14ayyd?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ognjenjevremovic/pretty-easy-date-check
[tests-image]: https://img.shields.io/badge/test-passing-green.svg
[dependancy-image]: https://david-dm.org/ognjenjevremovic/pretty-easy-date-check/status.svg
[dependancy-url]: https://david-dm.org/ognjenjevremovic/pretty-easy-date-check