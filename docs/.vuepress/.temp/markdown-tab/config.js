import { CodeTabs } from "D:/RisDocs/pylxu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-t_bfd632761e8391bac32718f122cb0d14/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/RisDocs/pylxu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-t_bfd632761e8391bac32718f122cb0d14/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/RisDocs/pylxu.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-t_bfd632761e8391bac32718f122cb0d14/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
