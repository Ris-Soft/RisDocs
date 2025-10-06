# 功能函数
最后更新：2024-08-10 07:35:05 星期六
适用于RWUIv3，以下为JavaScript函数
**温馨提示：元素组件相关函数不会在本文档中出现**

[TOC]

## 资源与存储

### setCookie(name, value, days = null, domain, path = '/')
置cookie内容(名称,值,保存天数[默认null],域名,路径[默认/])

### getCookie(name)
获取指定名称的Cookie

- name：cookie名称

### loadOrUnloadCSS(url, shouldLoad = true)
手动加载/卸载CSS

- url：资源地址
- shouldLoad：是否加载

### reloadScript(src)
手动载入/重载外部JavaScript

- src：资源地址

## 外观与主题

### colorMode(mode = 'auto', save = true)
设置页面主题配置

- mode：主题名称（“auto”，“dark”，“light”，“diy:ios”，“diy：new”）
- save：是否保存到根域名

### getColorMode()
获取页面颜色参数（仅获取深色与浅色，不涉及自动与特色主题）
无参数，调用时如果是深色则返回true，浅色则false

## 对话提示框

### createMessage(content, theme, duration = 3000, autoClose = true)
创建消息提示(内容,主题,存在时长,自动退出)

- content：文本型：顶部显示的小标题
- theme：文本型，包括 success、danger、primary、white 三个主题
- duration：存在时长，单位为毫秒
- autoClose：是否自动退出，逻辑型

### createDialog(type, theme, title, content, onConfirm, onCancel, typeRequire, typeNotice)
创建对话框(类型,主题,标题,文本,确认事件,取消事件,*type类型：是否必填*，*type类型：提示词*)

该函数返回对话框的ID，您可以使用此ID销毁对话框
使用方法：销毁class=对话框ID_overlay与class=对话框ID_box的元素即可

- type：文本型，包括 alert（提示框），confirm（确认取消框），type（文本输入框），diy（自定义）
	alert：只需填写前五个参数即可
	confirm：只需填写前六个参数接口，不使用的事件可设为null
	type：填写全参数，不使用的可设为null
	diy：只需要前四个参数，默认不显示任何按钮
- theme：文本型，包括 success、danger、primary、white 三个主题
- title：文本型，顶部显示的大标题
- content：文本型：顶部显示的小标题
- onConfirm：点击确认按钮时触发的事件
- onCancel：点击取消按钮时触发的事件
- typeRequire：此项为true且类型为type时，编辑框必须存在信息才能提交
- typeNotice：编辑框的placeholder

## 页面与加载

### fetchAndReplaceContent(url, remoteSelectors, targetSelectors, callback, postData)
懒加载替换页面指定元素

- url：目标地址
- remoteSelectors：目标元素选择器（Jquery）
- targetSelectors：本地元素选择器（Jquery）
- callback：加载完毕后的回调事件，可设置为null
- postData：发送时携带的POST参数，可设置为null

可利用此函数添加页面内链接的懒加载，使用Jquery监听指定元素内部a链接的click事件即可，下面是一个例子

```js
                    $('content a').on('click', function(event) {
                        event.preventDefault();
                        history.pushState('', '', this.href);
                        fetchAndReplaceContent(this.href, 'title,content', 'title,content', () => {
                            // 需要执行的操作
                            // ~~~

                        });
                    });
```

[[上一节]全局事件](/article/界面文档/全局事件 "[上一节]全局事件")
[[下一节]容器组件](/article/界面文档/容器组件 "[下一节]容器组件")