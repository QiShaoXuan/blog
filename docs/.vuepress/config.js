const CONFIG = require("../../config");
module.exports = {
  title: "blog",
  description: "blog from Qi",
  dest: "./dist",
  base: "/blog/",
  repo: "https://qishaoxuan.github.io/blog/",
  head: [
    ["link", {rel: "icon", href: `/images/favicon.png`}],
    ["meta", {name: "theme-color", content: "#00adb5"}],
    ["meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    ["meta", {
      name: "msapplication-TileColor",
      content: "#00adb5"
    }],
    [
      "meta",
      {
        name: "description",
        itemprop: "description",
        content: "blog from Qi"
      }
    ],
    ["meta", {itemprop: "name", content: "js_trick"}],
    ["meta", {
      itemprop: "image",
      content: "/js_tricks/images/favicon.png"
    }]
  ],
  markdown: {
    anchor: {permalink: false},
    toc: {includeLevel: [1, 2]},
    config: md => {
      md.use(require("markdown-it-include"), "./");
    }
  },
  plugins: [
    require("./plugins/comment/index"),
    "vuepress-plugin-cat",
    "@vuepress/nprogress"
  ],
  themeConfig: {
    nav: [
      {
        text: "css tricks",
        link: "https://qishaoxuan.github.io/css_tricks/"
      },
      {
        text: "js tricks",
        link: "https://qishaoxuan.github.io/js_tricks/"
      },
      {
        text: "about me",
        link: "https://qishaoxuan.github.io/animate_resume/"
      },
      {
        text: "GitHub",
        link: "https://github.com/QiShaoXuan/blog"
      }
    ],
    sidebar: [
      {
        title: "实现",
        collapsable: true,
        children: [
          "/realize/promise",
          "/realize/call",
          "/realize/new",
          "/realize/bind",
          "/realize/curry",
          "/realize/throttleDebounce"
        ]
      },
      {
        title: "JS",
        collapsable: true,
        children: [
          "/js/eventloop",
          "/js/inherit",
          "/js/module",
          "/js/insertAdjacentHTML",
          "/js/implementation",
          "/js/messageChannel",
          "/js/documentFragment",
          "/js/copy",
          "/js/mutationObserver",
          "/js/getBoundingClientRect"
        ]
      },
      {
        title: "HTML",
        collapsable: true,
        children: [
          "/html/wx",
          "/html/optimal",
          "/html/url",
          "/html/meta",
          "/html/email"
        ]
      },
      {
        title: "CSS",
        collapsable: true,
        children: ["/css/name", "/css/pseudo", "/css/selector", "/css/unit"]
      },
      {
        title: "Basic",
        collapsable: true,
        children: ["/basic/sort"]
      },
      {
        title: "算法",
        collapsable: true,
        children: [
          "/leetcode/sort",
          "/leetcode/twoSum",
          "/leetcode/singleNumber"
        ]
      },
      {
        title: "踩坑",
        collapsable: true,
        children: ["/keng/keng.md"]
      },
      {
        title: "如果我是面试官",
        collapsable: true,
        children: ["/interview/interview.md"]
      }
    ]
  }
};
