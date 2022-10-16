在浏览器中识别不了关键词module exports require，所以要使用打包工具解析一遍，这里我们使用browserify为例
npm install browserify -D
安装完成之后，因为是本地安装的所以不能直接使用browserify命令，需要在package.json scripts加入 "build": "browserify app.js -o dist/bundle.js"，然后使用npm运行命令，npm为什么能运行是因为安装browserify包时会在node_modules/.bin加入这个命令所执行的文件
执行npm run build 会生成dist/bundle.js文件
只要引入了就会加载模块