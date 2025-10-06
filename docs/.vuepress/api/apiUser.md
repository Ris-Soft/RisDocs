# apiAuth
*此处API总地址：https://user.3r60.top/auth*

[TOC]

## index.php
网页内授权登录（若您应用与桌面软件，推荐使用下方设备流登录API）

1. **请求地址：**
	`GET https://user.3r60.top/auth/?app_id=开发应用标识`
2. **错误返回：**
	操作正常时不会有任何提示，若用户操作有误则会自动跳转并显示


## webAuth/index.php
设备流登录，此处仅展示接口信息，使用教程请在左侧找到[设备流登录]

1. **请求地址：**
	`GET https://user.3r60.top/auth/webAuth/?deviceid=未验证的设备ID&app_id=开发应用标识`
2. **错误返回：**
	操作正常时不会有任何提示，若用户操作有误则会自动跳转并显示

## v2/oauth

oauthv2接口（暂不推荐使用）

