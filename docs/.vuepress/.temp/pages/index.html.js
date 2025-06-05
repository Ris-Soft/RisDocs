import comp from "D:/RisDocs/pylxu.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"腾瑞思智\",\"text\":\"Technology Research Solutions Zone\",\"actions\":[{\"theme\":\"brand\",\"text\":\"用户协议\",\"link\":\"/terms\"},{\"theme\":\"alt\",\"text\":\"开源项目\",\"link\":\"https://github.com/Ris-Soft\"}]}}]},\"readingTime\":{\"minutes\":0.18,\"words\":53},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
