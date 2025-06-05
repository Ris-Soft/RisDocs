export const redirects = JSON.parse("{\"/terms.html\":\"/article/sqjzx19c/\",\"/preview/custom-component.example.html\":\"/article/r8o5pm7d/\",\"/preview/markdown.html\":\"/article/dp9w1hw3/\",\"/notes/demo/bar.html\":\"/demo/cqocw8ia/\",\"/notes/demo/foo.html\":\"/demo/ny4w2yxn/\",\"/notes/demo/\":\"/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/sqjzx19c/", { loader: () => import(/* webpackChunkName: "article_sqjzx19c_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/article/sqjzx19c/index.html.js"), meta: {"title":"用户协议"} }],
  ["/article/r8o5pm7d/", { loader: () => import(/* webpackChunkName: "article_r8o5pm7d_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/article/r8o5pm7d/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/dp9w1hw3/", { loader: () => import(/* webpackChunkName: "article_dp9w1hw3_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/article/dp9w1hw3/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/cqocw8ia/", { loader: () => import(/* webpackChunkName: "demo_cqocw8ia_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/demo/cqocw8ia/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/ny4w2yxn/", { loader: () => import(/* webpackChunkName: "demo_ny4w2yxn_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/demo/ny4w2yxn/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
