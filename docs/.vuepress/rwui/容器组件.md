# 容器组件
更新时间：2024-08-10 14:15:53 星期六
页面基本布局详见[快速开始>书写代码](https://docs.3r60.top/article/%E7%95%8C%E9%9D%A2%E6%96%87%E6%A1%A3/%7BM%3D1%7D%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B#h2-step-2- "快速开始>书写代码")

[TOC]

## 顶栏-topbar

使用html标签`<topbar></topbar>`即可调用顶栏

**元素特性**

1. 顶部链接单击时使用懒加载替换main而载入新页面
2. 当前链接与中部某一个链接一致时，会将中部某个链接的文本作为子标题，此时会自动组成title：子标题 | 总标题(webTitle)
3. 顶栏右侧的齿轮图标是全局链接，每个网站都会有，用于修改当前主题、进度条设定
4. 顶栏的左侧标题与链接默认使用调用包的配置，也可使用参数定义

**元素参数**

以下是顶栏的一些参数用于开发时各种个性化设定：（注意：使用时添加data-前缀）

- title：左侧标题，当填写此参数时忽略全局默认设定
- navItems：中部链接，同上，格式与调用包一致
- navRightItems：右侧链接，同上
- homeUrl：用于设定左侧标题单击时的跳转页面，默认是根域名
- showExpendButton：默认为true，是否显示展开按钮（当页面宽度小于768px时，会在顶栏最右侧显示此按钮，此项设置为"false"后无论如何都不会显示）
- noReplace：默认为false，当此参数为true时则不自动生成顶栏（不推荐）
- loadCallBack：加载完毕后的回调函数

**元素方法**

1. addButtonToNavRight(iconClass, buttonText, linkHref, onClickJs)
	向顶栏添加按钮(按钮图标类, 按钮文本, 链接, 绑定函数)
	按钮图标类使用booticons
2. insertElementToNav(htmlContent, position)
	向顶栏添加元素(html文本, 位置['left','right'])
3. setActiveLinkInTopbar($topbar)
	根据当前Url设定活跃链接(顶栏的Jquery对象)
	正常情况下您不应该调用此函数，因为它会自动执行
4. expandNewTopBar()
	展开手机端中部链接栏()
	此功能与手机端右上角的菜单按钮效果一致，生成一个新的顶栏包含中部链接
	正常情况下您不应该调用此函数

## 左栏-lead

与content元素搭配构成左侧目录，右侧文本页面
使用html标签`<lead></lead>`即可调用顶栏

**元素特性**

1. 本元素需要与content一块使用，而不是与main一块使用，本元素需要放置在main中而不是与其并列
2. 内部有内容时不会替换内容，无论有无内容都会在右上角外侧添加展开/收起按钮，展开收起由脚本自动处理，您无需干涉
3. 元素为空时会从自动载入目录项目与`<footer>`元素，目录项目的数据有以下来源（前项为空时自动向下寻找）
 1. 参数提供Url
 2. 网页当前目录下的contents.json文件
 3. 网站根目录下的contents.json文件
4. contents.json的数据结构如下所示，type表示类型，text标识文本，href表示链接（text为文本类型，link为链接类型【默认不支持多级链接】，url为引入类型【type:url,href=目标地址时会从目标地址载入左栏项目】）
```json
[
    {
        "type": "text",
        "text": "基本组件"
    },
    {
        "type": "link",
        "text": "按钮样式",
        "href": "https://dev.3r60.top/RWUIv3/template/index.html"
    },
    {
        "type": "link",
        "text": "弹窗样式",
        "href": "https://dev.3r60.top/RWUIv3/template/dialog.html"
    },
    {
        "type": "link",
        "text": "表单样式",
        "href": "https://dev.3r60.top/RWUIv3/template/form.html"
    }
]
```

5. 当您需要向左栏添加简单的文本元素时可以使用text类型，如果您需要大量代码置入，推荐使用JavaScript向左栏插入新的元素

**元素参数**

以下是左栏的一些参数用于开发时各种个性化设定：（注意：使用时添加data-前缀）

- loadFromFile：默认为true，为false时将不会自动构建菜单
- fileName：默认为空，填写此项后将不会自动查找contents.json
- changeTitle：默认为true，为false时点击左栏链接将不会自动构建网页标题
- useAjax：默认为true，为false时点击左栏链接将不再使用懒加载

**元素方法**

一般开发不会使用到下方函数，请尽量使用元素参数完成工作

1. populateListWithJson($list, navFrom = '')
	使用特定的url载入左栏(左栏的Jquery对象,目标Url[默认为空])
2. mergeAndAddProjects($list, newJsonData)
	使用特定的json数据载入左栏(左栏的Jquery对象,JSON数据)
	此函数被1所调用
3. setActiveLinkInList($list)
	根据当前Url设定活跃链接(左栏的Jquery对象)
	更改网页标题设置与元素参数一致
4. fetchJson(url)
	从指定Url获取Json数据(链接地址)
	返回JSON对象
	被函数1所调用

## 靠右文本-content

与lead元素搭配构成左侧目录，右侧文本页面

## 主容器-main
如果需要lead、content这两个元素，请放入主容器
如果需要footer，请放入主容器
topbar不要放入主容器
若不懂，请看[快速开始>书写代码](https://docs.3r60.top/article/%E7%95%8C%E9%9D%A2%E6%96%87%E6%A1%A3/%7BM%3D1%7D%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B#h2-step-2- "快速开始>书写代码")

## 底栏-footer

使用html标签`<footer></footer>`即可调用顶栏

**元素特性**
若未填写参数，则根据调用包的默认值载入

**元素参数**

以下是底栏的一些参数用于开发时各种个性化设定：（注意：使用时添加data-前缀）

- links：链接列表
- copyright：版权信息

**元素方法**

一般情况无需调用，会自动调用

1. createFooter(footerElement)
	创建底栏(目标元素Jquery对象)

## 按钮-Button

演示站点：[按钮演示](https://dev.3r60.top/RWUIv3/template/index.html "按钮演示")

1. 给Button或a元素添加btn类名即可使用按钮组件
2. 我们为按钮划分了大小
 1. btn-sm 小按钮
 2. btn-md 中等按钮
 3. btn-lg 大按钮
2. 我们为按钮提供了四种可选主题，添加以下类名即可使用
 3. btn-success 成功按钮
 3. btn-danger 错误按钮
 3. btn-primary 蓝色按钮
 3. btn-white 纯色按钮
3. 我们还提供了可选阴影，添加btn-shadow类名即可使用
5. 将以上四个类名组合即可构成按钮，以下是HTML代码与示例：

演示：
<!-- 小按钮 -->
<button type="button" class="btn btn-sm btn-success btn-shadow">小成功按钮</button> <button type="button" class="btn btn-md btn-success btn-shadow">中等成功按钮</button> <button type="button" class="btn btn-lg btn-danger btn-shadow">大错误按钮</button> <button type="button" class="btn btn-sm btn-primary btn-shadow">小蓝色按钮</button> <button type="button" class="btn btn-sm btn-white btn-shadow">小纯色按钮</button> <button type="button" class="btn btn-sm btn-danger btn-shadow">小红色按钮</button>
代码：
```html
<!-- 小按钮 -->
<button type="button" class="btn btn-sm btn-success btn-shadow">小成功按钮</button>
<!-- 中等按钮 -->
<button type="button" class="btn btn-md btn-success btn-shadow">中等成功按钮</button>
<!-- 大按钮 -->
<button type="button" class="btn btn-lg btn-danger btn-shadow">大错误按钮</button>
<!-- 蓝色小按钮 -->
<button type="button" class="btn btn-sm btn-primary btn-shadow">小蓝色按钮</button>
<!-- 纯色小按钮 -->
<button type="button" class="btn btn-sm btn-white btn-shadow">小纯色按钮</button>
<!-- 红色小按钮 -->
<button type="button" class="btn btn-sm btn-danger btn-shadow">小红色按钮</button>
```

## 卡片-card
您可以通过使用`<card></card>`的方式引入卡片
也可以通过`<div class="card"></div>`的方式引入卡片
默认卡片不携带左侧边框，当添加以下类名时将出现左侧边框

1. card-primary 蓝色左边框
2. card-success 绿色左边框
3. card-danger 红色左边框

示例：
<div class="card"><h4 style="margin:0px">卡片标题</h4>这是一个无边框的卡片</div>
<div class="card card-success"><h4 style="margin:0px">卡片标题</h4>这是一个带有绿色边框的卡片</div>
<div class="card card-primary"><h4 style="margin:0px">卡片标题</h4>这是一个带有蓝色边框的卡片</div>
<div class="card card-danger"><h4 style="margin:0px">卡片标题</h4>这是一个带有红色边框的卡片</div>

代码：
```html
<div class="card card-success">
	<h4 style="margin:0px">卡片标题</h4>
	这是一个带有绿色边框的卡片
</div>
```

## 表单-form
在使用input元素时，将class设置为textEditor即可使用RWUIv3的表单样式（推荐在编辑框与下拉框使用）
默认选中时边框不变色，当添加以下类名时将变为特定颜色

1. textEditor-primary 选中时蓝色边框
2. textEditor-success 选中时绿色边框
3. textEditor-danger 选中时红色边框

示例：
<label>绿色输入框</label><input class="textEditor textEditor-success" placeholder="我是提示文本">
<label>蓝色输入框</label><input class="textEditor textEditor-primary" placeholder="我是提示文本">
<label>红色输入框</label><input class="textEditor textEditor-danger" placeholder="我是提示文本">

代码：
```html
<label>绿色输入框</label>
<input class="textEditor textEditor-success" placeholder="我是提示文本">
<label>蓝色输入框</label>
<input class="textEditor textEditor-primary" placeholder="我是提示文本">
<label>红色输入框</label>
<input class="textEditor textEditor-danger" placeholder="我是提示文本">
```

## 标签-tag
您可以通过`<div class="tag tag-white"></div>`的方式引入标签
通过添加类名tag-shadow 从而为标签添加阴影

只有tag标签时不会有任何可见效果，与以下类名搭配时将出现效果

1. tag-white 纯色模式
1. tag-primary 蓝色模式
2. tag-success 绿色模式
2. tag-danger 红色模式

示例：
<div class="tag tag-white">这是一个纯色背景标签</div>
<div class="tag tag-primary" style="color:white">这是一个蓝色背景标签</div>
<div class="tag tag-success" style="color:white">这是一个绿色背景标签</div>
<div class="tag tag-danger" style="color:white">这是一个红色背景标签</div>

代码：
```html
<div class="tag tag-white">这是一个纯色背景标签</div>
<div class="tag tag-primary">这是一个蓝色背景标签</div>
<div class="tag tag-success">这是一个绿色背景标签</div>
<div class="tag tag-danger">这是一个红色背景标签</div>
```


[[上一节]功能函数](/article/界面文档/功能函数 "[上一节]功能函数")
[[下一节]无]()