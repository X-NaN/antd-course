# 开发环境
(1)安装JS执行环境：NodeJS 
(2)安装cnpm,安装和管理一些第三方的包
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 初始化React项目
 * 新建空文件夹
 mkdir antd-course
 cd antd-course
 * 初始化项目
 cnpm init -y
调用 cnpm init 来初始化 package.json，它是 NodeJS 约定的用来存放项目的信息和配置等信息的文件。
 * 安装umi
 cnpm install umi --save-dev

# 下载代码后，执行命令安装项目依赖包
cnpm install

# 插件安装
（1）安装插件umi-plugin-react
cnpm install umi-plugin-react --save-de
（2）在配置文件config.js中引入该插件

# 启动代码
## 修改脚本
* 在 package.json 中的 scripts 里面添加两个命令：
{
  "scripts": {
+   "dev": "umi dev",
+   "build": "umi build"
  }
}
* 项目根目录中通过 cnpm run [scriptname] 来运行
cnpm run dev

## 浏览器打开终端日志地址
如：http://localhost:8000/

# 构建和部署
（1）构建
cnpm run build 
该命令来构建出最终的产物，执行该命令后会生成最终的 HTML、CSS 和 JS 到 dist 目录下。它们是浏览器可以直接识别并运行的代码，这样你就可以将它们部署到你想要的服务器上了。