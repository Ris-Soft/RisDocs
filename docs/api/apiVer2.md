---
title: apiVer2
createTime: 2025/10/06 21:26:45
permalink: /article/ld8jhdvw/
---

## tips
RWUIv2网页内小提示

1. **请求地址：**
	`GET https://api.3r60.top/v2/tips/`
2. **返回示例：**
	暂无
3. **错误返回**
	暂无

## link
腾瑞思智内部短网址

1. **请求地址：**
	`GET https://api.3r60.top/v2/link/?id=链接ID`或`GET https://3r60.top/?id=链接ID`
2. **返回示例：**
	header跳转页面
3. **错误返回**
	网站链接不存在

## ip
获取访问服务器的公网IP

1. **请求地址：**
	`GET https://api.3r60.top/v2/ip/`
2. **返回示例：**
	访问的公网IP

## background
获取各色背景

### bing
获取必应每日壁纸

1. **请求地址：**
	`GET https://api.3r60.top/v2/background/bing.php`
2. **返回示例：**
	必应每日壁纸（带有缓存）

### spawn
生成渐变色背景

1. **请求地址：**
	`GET https://api.3r60.top/v2/background/spawn.php?start_color=起始颜色&end_color=结束颜色`
2. **返回示例：**
	请求对象

## account
瑞思账户接口-版本2
*此处API总地址：https://api.3r60.top/v2/account*

### getNewDeviceId

获取一个用于设备流登录的设备ID

1. **请求地址：**

	`GET https://api.3r60.top/v2/account/getNewDeviceId.php?token=开发者密钥&app_id=开发应用识别码`
2. **返回示例：**
```json
{
    "code": 300,
    "info": "设备ID生成成功",
	"deviceId": "设备ID"
}
```

3. **错误返回**

| 错误代码 | 问题描述 |
| ------------ | ------------ |
| 300 | 获取成功 |
| 401 | 开发者密钥错误 |
| 402 | 开发应用识别码错误 |

### setUserLogOut

置用户退出登录

1. **请求地址：**

	`GET https://api.3r60.top/v2/account/setUserLogOut.php?deviceid=设备标识`
2. **返回示例：**
```json
{
    "code": 200,
    "info": "退出登录成功"
}
```

3. **错误返回**

| 错误代码 | 问题描述 |
| ------------ | ------------ |
| 200 | 退出/销毁ID成功 |
| 201 | 设备Id不存在 |

### getUserProfile

*改名提示：我们已经把profile.php改为getUserProfile，原文件依然可用，但我们仍然建议使用新的命名，避免未来的某一天旧名称停止支持*

获取公共信息

**警告：此处公共信息是专用于社交的，授权登录和设备流登录请使用[getUserInfo](#getUserInfo)接口**

1. **请求地址：**
	1. 使用用户名：
	`GET https://api.3r60.top/v2/account/getUserProfile.php?name=用户名`
	2. 使用用户ID：
	`GET https://api.3r60.top/v2/account/getUserProfile.php?id=用户标识`
2. **返回示例：**
包含以下字段：

- `code`：表示请求成功或失败的HTTP状态码。
- `username`：用户的用户名。
- `nikeName`：用户的昵称。
- `qq`：用户的QQ号码。
- `sex`：用户的性别。
- `address`：用户的地址。
- `lastLoginTime`：用户的最后登录时间戳。
- `registerTime`：用户的注册时间戳。
- `loginWay`：用户登录的方式。

```json
{
  "code": 200,
  "username": "johndoe",
  "nikeName": "John",
  "qq": "123456789",
  "sex": "男",
  "address": "城市，主街123号",
  "lastLoginTime": "2022-01-01 12:34:56",
  "registerTime": "2021-01-01 00:00:00",
  "loginWay": "电子邮件"
}
```

3. **错误返回**
| 错误代码 | 问题描述 |
| ------------ | ------------ |
| 404 | 用户不存在 |
| 400 | 当前方式被禁用 |


### getUserInfo

获取用户信息

1. **请求地址：**

	`GET https://api.3r60.top/v2/account/getUserInfo.php?deviceId=设备ID`

2. **返回示例：**
	令牌信息：
```json
{
    "code": 200,
    "userInfo": {
        "basicInfo": {
            "userId": "114514",
            "userName": "恶臭先辈",
            "nickName": "恶臭先辈的昵称",
            "userMail": "114514@outlook.com",
            "loginWay": "Official"
        },
        "registerInfo": {
            "registerTime": "0000-00-00"
        },
        "otherInfo": {
            "lastLoginTime": "2023-10-15",
            "qqId": "1919810",
            "qqImg": "http://q1.qlogo.cn/g?b=qq&nk=14&s=100",
            "tel": "1145141919810"
        },
        "banInfo": {
            "baned": "0",
            "reason": null
        },
        "deviceInfo": {
            "deviceId": "ABC123",
            "deviceInfo": "设备信息描述",
            "deviceIP": "192.168.1.100"
        }
    }
}
```

3. **错误返回**

| 错误代码 | 问题描述 |
| ------------ | ------------ |
| 200 | 工作正常 |
| 201 | 等待用户操作 |
| 401 | 设备Id不存在 |
| 407 | 设备与云端记录地址不一致 |
| 412 | 用户登录设备已超过20 |
| 406 | 用户被封禁 |

