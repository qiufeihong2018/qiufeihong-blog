# pm2
## 简介
PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。
下面就对PM2进行入门性的介绍，基本涵盖了PM2的常用的功能和配置。
## 安装
全局安装，简直不能更简单。
npm install -g pm2
## & vue项目

### 项目运行在后台

1.在package.json中配置
```
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js",
    "server": "pm2 start app.js"
  },
```
2.在根目录下添加app.js

```
// app.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk')
const app = express();
app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  res.send(html)
})
app.listen(5656, res => {
  console.log(chalk.yellow('Start Service On 5656'));
});

```
3.将项目打包,生成的dist才能被pm2调用
```
npm run build

```

4.使用命令启动项目并后台性能检测
```angular2
npm run server
```

### 开机自动重启项目
1.查看进程列表
```angular2
pm2 list

```
2.保存该项目进程
```
pm2 save 0

```
3.生成开机自启动命令

```
pm2 startup
```
4.将生成的命令粘贴到控制台运行.
5.关机测试,ok



