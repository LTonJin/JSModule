define(['module2'], function(module2) {
    console.log('module1 加载');
    return {
        bar: module2.foo * 2,
    }
})