/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '用户协议', link: '/terms' },
  {
    text: 'RWUI', items: [
      { text: '快速开始', link: '/rwui/start' },
      { text: '全局事件', link: '/rwui/event' },
      { text: '容器组件', link: '/rwui/container' },
      { text: '功能函数', link: '/rwui/function' }
    ]
  },
  {
    text: '接口', items: [
      { text: '账户系统', link: '/api/apiUser' },
      { text: '接口版本1', link: '/api/apiVer1' },
      { text: '接口版本2', link: '/api/apiVer2' }
    ]
  },
  {
    text: '账户系统', items: [
      { text: '必要参数', link: '/user/parameters' },
      { text: '设备流登录', link: '/user/login' },
      { text: '用户信息授权', link: '/user/auth' }
    ]
  },
  { text: '关于', link: '/about' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
])
