---
title: apiVer1
createTime: 2025/10/06 21:26:45
permalink: /article/2a80qmpv/
---

## greet
瑞思时间问候接口

### index.php

1. **请求地址：**
	`GET https://api.3r60.top/v1/greet/`
2. **返回示例：**
	凌晨好
	早上好
	中午好
	下午好
	傍晚好
	晚上好
3. **错误返回**
	暂无

## ads
瑞思广告投放接口

### index.php

1. **请求地址：**
	`GET https://api.3r60.top/v1/ads/`
2. **返回示例：**
	用户录入的内容
3. **错误返回**
	暂无

## login
瑞思账户接口-版本1（推荐使用版本2）
*此处API总地址：https://api.3r60.top/v1/login*
### login.php
此接口已禁止第三方使用
### logout.php

删除设备ID（退出设备登录）

1. **请求地址：**
	`GET https://api.3r60.top/v1/login/logout.php?deviceid=设备标识`
2. **返回示例：**
```json
{
    "Status": true,
    "Data": "若设备ID存在，则退出成功"
}
```

3. **错误返回**
当前版本暂无错误处理


### GetUserInfo.php

获取用户信息（推荐使用v2版本）

1. **请求地址：**
	1. 使用authToken：
	`GET https://api.3r60.top/v1/login/GetUserInfo.php?authtoken=信息令牌`
	2. 使用deviceId：
	`GET https://api.3r60.top/v1/login/GetUserInfo.php?deviceid=设备标识`

2. **返回示例：**
	令牌信息：
```json
{
    "Status": true,
    "Data": {
        "BasicInfo": {
            "UserID": "114514",
            "UserName": "恶臭先辈",
            "NikeName": "恶臭先辈的昵称",
            "UserMail": "114514@outlook.com",
            "LoginWay": "Official"
        },
        "RegisterInfo": {
            "RegisterTime": "0000-00-00"
        },
        "OtherInfo": {
            "LastLoginTime": "2023-10-15",
            "QQ": "1919810",
            "QQImg": "http://q1.qlogo.cn/g?b=qq&nk=14&s=100",
            "Phone": "1145141919810"
        },
        "BanInfo": {
            "Baned": "0",
            "Reason": null
        }
    }
}
```
设备信息：
```json
{
    "Status": true,
    "Data": {
        "BasicInfo": {
            "UserID": "114514",
            "UserName": "恶臭先辈",
            "NikeName": "恶臭先辈的昵称",
            "UserMail": "114514@outlook.com",
            "LoginWay": "Official"
        },
        "RegisterInfo": {
            "RegisterTime": "0000-00-00"
        },
        "OtherInfo": {
            "LastLoginTime": "2023-10-15",
            "QQ": "1919810",
            "QQImg": "http://q1.qlogo.cn/g?b=qq&nk=14&s=100",
            "Phone": "1145141919810"
        },
        "BanInfo": {
            "Baned": "0",
            "Reason": null
        },
        "DeviceInfo": {
            "DeviceID": "ABC123",
            "DeviceInfo": "设备信息描述",
            "DeviceIP": "192.168.1.100"
        }
    }
}
```

3. **错误返回**

| 错误代码 | 问题描述 |
| ------------ | ------------ |
| Status:true | 工作正常 |
| Status:false | 工作异常，详情查看info提示 |
