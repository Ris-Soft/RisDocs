---
title: 用户信息授权
createTime: 2025/10/06 21:27:01
permalink: /article/nrqfenan/
---

AuthToken获取信息方式在ApiV2版本已弃用

**相关链接:**  
- [开发者平台](https://user.3r60.top/dev)  
- [示例页面](https://user.3r60.top/auth/?app_id=TESTAPPID)

## 接口终端

| 接口地址 | 描述 |
| --- | --- |
| [网页应用授权](https://docs.3r60.top/article/b4ahgcr2/#index-php) | 用户通过此接口完成授权过程。 |

在使用 **网页应用授权** API 时，请将 `[开发者Token]` 替换为您的 Token，并将 `[目标应用APPID]` 替换为您的 APPID。有关如何获取 APPID 和 Token 的详细信息，请参考文档：[如何获取APPID和TOKEN？](https://docs.3r60.top/article/ssclq5ks/)

## 接口使用流程

1. **配置应用信息**
   - 登录开发者平台，选择现有应用或新建应用。
   - 在应用详情页面配置应用名称、回调地址（返回地址）以及错误返回地址（网络地址）。

2. **引导用户访问授权页面**
   - 在您的网站中，引导用户访问 **网页应用授权** 地址：[网页应用授权](https://docs.3r60.top/article/ssclq5ks/index-php)。

3. **用户授权**
   - 用户访问授权页面后，可以使用腾瑞思智账户完成授权。

4. **获取用户信息获取凭据**
   - 当用户完成授权后，我们将重定向用户至您设置的回调地址，并附加地址参数。例如，如果您的回调地址是 `https://example.com`，则目标 URL 将如下所示：

   ```
   https://example.com?authtoken=[用户信息获取凭据]
   ```

5. **获取用户信息**
   - 使用用户信息获取凭据，调用 API 获取用户信息。API 使用方法见文档：[获取用户信息](https://docs.3r60.top/article/517l5tw2/getuserinfo-php) 注意使用authtoken方式获取。