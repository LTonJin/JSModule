require.js封装了一套方法实现js模块化加载，定义了define，和requrejs函数，在es6之前使用，es6之后基本被淘汰

// paths里面是模块名和路劲的映射
requirejs.config({
    paths: {

    }
})

AMD为异步加载模块，当引入依赖时才会加载依赖的模块，否则不加载