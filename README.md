# **pretty-easy-date-check**

### *What is pretty-easy-date-check?*
***pretty-easy-date-check*** *is a simple NodeJS module for performing check against a supplied value to determine if it is a valid date (or can be transformed to one!)*.

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

or if you use TypeScript
```typescript
import isDate from 'pretty-easy-date-check'
```

The module returns a function for you to call and supply it with parameter that you'd like to check if it is a valid Date or a string representation of a valid date (*see the examples of valid dates, down below*).
The function returns a Boolean.

&nbsp;

## Examples

### Valid dates
```javascript
let now = isDate(new Date());               //  true
let now = isDate('3.10.17');                //  true
let now = isDate('03.10.2017.');            //  true
let now = isDate('3,10,17');                //  true
let now = isDate('03,10,2017');             //  true
let now = isDate('3/10/17');                //  true
let now = isDate('03/10/2017');             //  true
let now = isDate('3-10-17');                //  true
let now = isDate('03-10-2017');             //  true
let now = isDate('Fri Mar 10 17');          //  true
let now = isDate('Fri Mar 10 2017');        //  true
let now = isDate(new Date().toString());    //  true

//  Pretty much, everything else should result in a false value
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
