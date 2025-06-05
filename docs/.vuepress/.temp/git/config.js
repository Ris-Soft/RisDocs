import { GitContributors } from "D:/RisDocs/pylxu.github.io/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_d4f16b7afbbef676e798c80e9b577cf0/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/RisDocs/pylxu.github.io/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_d4f16b7afbbef676e798c80e9b577cf0/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
