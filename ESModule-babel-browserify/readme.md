先使用babel将es6代码转为es5代码并且以CommonJS规范导出模块，然后使用browserify工具解析module exports require关键词，打包成浏览器可运行的代码