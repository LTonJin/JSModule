const module1 = require('./src/module1.js');
const module2 = require('./src/module2.js');
const uniq = require('uniq');
module1.foo();
module2.foo();
const arr = uniq(module1.arr);
console.log(arr);