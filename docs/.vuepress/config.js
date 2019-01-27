const utils = require("./utils")

module.exports = {
  title: 'Swoole Docs',
  description: "Study Swoole4 by Myself",
  base: '/swoole/',
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    sidebar: utils.inferSiderbars(),
    repo: "Just008/swoole",
    lastUpdated: "上次更新",
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
}