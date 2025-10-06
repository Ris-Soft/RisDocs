# 快速开始
最后更新：2024-08-10 07:35:05 星期六
适用于RWUIv3

[TOC]

## Step1 放置调用包文件
此文件用于在单网站/多网站之间同步默认数据（顶栏内容、网站标题等）。

在您的目标网站/资源网站中创建一个文件，名为`package.js`
该文件的内容如下：
```javascript
// RWUIv3 配置包
// Devloped In 2024/6/23 (PYLXU)

// 站点配置
let webTitle = "TRSZ WebUI Ver3";

// 顶栏配置
let defaultTitle = "RWUI v3";
let defaultNavItems = [
  { text: '使用文档', href: 'https://docs.3r60.top/' },
  { text: '关于我们', href: '#' },
]
let defaultNavRightItems = []
// 底栏默认值
let defaultFooterLinks = [
  { text: '联系我们', href: '#' },
  { text: '隐私政策', href: '#' },
];
let defaultCopyright = '版权所有 © 2024 腾瑞思智';

// 引入真实定义包
document.writeln( `<script src="https://assets.3r60.top/v3/package.js"></script>`);
```

调用包变量详解：

- webTitle：网站标题，用于标题自动生成
- defaultTitle：顶栏左侧显示的文本
- defaultNavItems：顶栏中部的链接列表
- defaultNavRightItems：顶栏右侧的链接列表
- defaultFooterLinks：底栏的链接列表
- defaultCopyright：底栏显示的文本

## Step 2 开始书写代码

调用步骤一创建的调用包，随后开始书写代码
以下是一些调用示例，您可以根据这些示例进行开发

### 无左栏示例代码

```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <script src="调用包路径"></script>
    <title></title>
</head>
<body>
    <topbar></topbar>
    <main>
        <index>
            <h1>使用示例</h1>
            <h3>RWUIv3使用的例子</h3>
            <center>
                <a href="#"><button class="btn btn-success btn-lg">114514</button></a>
                <a href="#"><button class="btn btn-success-e btn-lg">1919810</button></a>
            </center>
        </index>
        <footer></footer>
    </main>
</body>
</html>
```

### 有左栏示例代码
提示：当您需要使用左侧目录，右侧文本的结构时，需要给main元素的class添加`flex`和`pb-0`的类名

```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <script src="https://dev.3r60.top/RWUIv3/package.js"></script>
    <title></title>
</head>
<body>
    <topbar></topbar>
    <main class="flex pb-0">
		<lead></lead>
		<content>
		<h1>文档书写中</h1>
		<p>文档书写中...</p>
		</content>
	</main>
</body>
</html>
```


## 基本区域展示

- topbar：顶栏
- main：主要区域
 - lead：左栏
 - content：文本区域（当存在左栏时搭配使用）
- footer：底栏

[演示图片1](https://docs.3r60.top/assets/img/img-page1.png "页面1")
[演示图片2](https://docs.3r60.top/assets/img/img-page2.png "页面2")

[[上一节]无]()
[[下一节]全局事件](/article/界面文档/全局事件 "[下一节]全局事件")
