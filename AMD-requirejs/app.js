requirejs.config({
    paths: {
        module1: './src/module1',
        module2: './src/module2',
    }
})
requirejs(['module1'], function(module1) {
    console.log(module1.bar);
})