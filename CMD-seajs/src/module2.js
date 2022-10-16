console.log('module2 加载');
define(function(require, exports, module){
    const {value} = require('./module1');
    module.exports= {
        value:  value * 2
    }
})