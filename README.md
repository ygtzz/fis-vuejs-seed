# fis-vuejs-seed

```bash
#安装fis3
npm install -g fis3

#安装fis插件
npm install [-g] fis3-hook-commonjs
npm install [-g] fis3-postpackager-loader
npm install [-g] fis3-preprocessor-js-require-css
npm install [-g] fis3-preprocessor-js-require-file
npm install [-g] fis-parser-node-sass

#编译预览
cd fis-vuejs-seed
fis3 release -d ./dist
fis3 server --root ./dist start
