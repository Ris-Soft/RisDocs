import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",

  title: "瑞思文档",
  description: "腾瑞思智官方文档站点",

  theme: defaultTheme({
    logo: "https://api.3r60.top/icons/user.ico",

    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "用户协议",
        link: "/terms",
      },
    ],
  }),

  bundler: viteBundler(),
});
