# commonJs
公共脚本库开发,除了开发,还要对文档进行构建,这样一起合作的伙伴/使用的同事才能看懂这个项目做了些什么.下面简单介绍下该项目的开发流程以及上手流程.

## 开发依赖
+ rollup [官网链接](https://www.rollupjs.com/)
  + js 工具库构建工具
+ jsdoc [官网链接](https://jsdoc.app/index.html)
  + 文档生成工具
+ gulp [官网链接](https://gulpjs.com/docs/en/getting-started/quick-start)
  + 项目构建工具

## npm 发布
```js
npm adduser
    name:
    password:
    email: 

npm login

npm publish <package name>

npm unpublish  <package name> --force
```


## 快速上手
+ 安装 rollup
    ```js
    npm install rollup --global
    ```
+ 安装 gulp
    ```js
    npm install --global gulp-cli
    ```
+ 克隆/运行项目
    ```js
    git clone git@github.com:plusSy/commonJs.git
    cd commonJs
    npm install
    npm run serve
    ```
## 脚本命令
```js
"serve": "gulp serve",                              // 启动 jsdoc 项目
"build": "set NODE_ENV=production && rollup -c",    // 构建 js 文件
"build:dev": "rollup -c -w",                        // 构建 js 文件 并 动态编译
"test": "node test/test.js"                         // 测试
```
+ 这里`serve`任务做了三件事
    + 监听 scss 文件，编译成 css 对应存入 static 目录下
    + 监听 jsdoc 相关文件
    + 触发 gulp-jsdoc 生成文档 
+ `build` 任务以及 `build:dev` 任务是进行脚本构建
+ `test` 任务是进行脚本测试
## 目录结构
```js
+-- demo                                // 文档目录
| +-- src                               // 脚本目录
| | +-- *.js                            // 脚本文件
| | +-- main.js                         // 脚本入口文件
| +-- tutorials                         // jsdoc 的辅助教程/样例目录
| | +-- demo.html                       // jsdoc html 教程
| | +-- markdown.md                     // jsdoc markedown 教程
| +-- jsdoc-conf.json                   // jsdoc 配置文件
+-- dist                                // 项目打包目录
+-- doc                                 // 文档生成目录
+-- node_modules                        // 项目依赖
+-- scss                                // 样式修改
+-- static                              // 静态资源文件
| +-- img                               // 图片
| +-- scriprs                           // 脚本
| +-- styles                            // 样式
| +-- webfonts                          // 字体
+-- tmpl                                // doc模板目录
+-- .babelrc                            // 编译配置文件
+-- .editconfig                         // 编辑器配置
+-- .eslintrc.js                        // lint配置
+-- .gitignore                          
+-- gulpfile.js                         // 项目构建配置
+-- package.json                        // 项目配置
+-- publish.js                          // 修改由 jsdoc 传入的数据，包括 nav 信息，注释信息等
+-- README.md
+-- rollup.config.js                    // 工具库构建配置
```
