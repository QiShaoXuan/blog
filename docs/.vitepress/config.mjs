import { defineConfig } from "vitepress";

const base = "/blog/";
const sections = [
  ["实现", [
    ["Promise", "/realize/promise.html"],
    ["call && apply", "/realize/call.html"],
    ["new", "/realize/new.html"],
    ["bind", "/realize/bind.html"],
    ["柯里化", "/realize/curry.html"],
    ["节流 & 防抖", "/realize/throttleDebounce.html"],
  ]],
  ["JS", [
    ["事件循环（Event Loop）", "/js/eventloop.html"],
    ["原型继承", "/js/inherit.html"],
    ["模块", "/js/module.html"],
    ["insertAdjacent HTML/Text", "/js/insertAdjacentHTML.html"],
    ["document.implementation", "/js/implementation.html"],
    ["MessageChannel", "/js/messageChannel.html"],
    ["DocumentFragment", "/js/documentFragment.html"],
    ["深拷贝 & 浅拷贝", "/js/copy.html"],
    ["MutationObserver", "/js/mutationObserver.html"],
    ["getBoundingClientRect", "/js/getBoundingClientRect.html"],
  ]],
  ["HTML", [
    ["微信小程序的一些注意点", "/html/wx.html"],
    ["前端性能优化", "/html/optimal.html"],
    ["从用户输入URL到浏览器呈现页面经过了哪些过程", "/html/url.html"],
    ["常见 meta 标签", "/html/meta.html"],
    ["邮件", "/html/email.html"],
  ]],
  ["CSS", [
    ["命名规则", "/css/name.html"],
    ["伪类和伪元素", "/css/pseudo.html"],
    ["选择器", "/css/selector.html"],
    ["单位", "/css/unit.html"],
  ]],
  ["Basic", [["排序", "/basic/sort.html"]]],
  ["算法", [
    ["排序", "/leetcode/sort.html"],
    ["两数之和", "/leetcode/twoSum.html"],
    ["只出现一次的数字", "/leetcode/singleNumber.html"],
  ]],
  ["踩坑", [["记录", "/keng/keng.html"]]],
  ["如果我是面试官", [["我会考什么", "/interview/interview.html"]]],
];

export default defineConfig({
  title: "blog",
  description: "blog from Qi",
  lang: "zh-CN",
  base,
  outDir: "../dist",
  srcExclude: ["realize/reactHook.md"],
  appearance: false,
  markdown: { theme: "github-dark" },
  rewrites: (page) => page.replace(/(^|\/)readme\.md$/i, "$1index.md"),
  head: [
    ["link", { rel: "icon", href: base + "images/favicon.png" }],
    ["meta", { name: "theme-color", content: "#00adb5" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "msapplication-TileColor", content: "#00adb5" }],
    ["meta", { itemprop: "name", content: "blog" }],
    ["meta", { itemprop: "image", content: base + "images/favicon.png" }],
  ],
  themeConfig: {
    nav: [
      { text: "css tricks", link: "https://qishaoxuan.github.io/css_tricks/" },
      { text: "js tricks", link: "https://qishaoxuan.github.io/js_tricks/" },
      { text: "about me", link: "https://qishaoxuan.github.io/" },
      { text: "GitHub", link: "https://github.com/QiShaoXuan/blog" },
    ],
    sidebar: sections.map(([text, entries]) => ({
      text,
      collapsed: false,
      items: entries.map(([text, link]) => ({ text, link })),
    })),
    outline: { level: [1, 2], label: "本页目录" },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    docFooter: { prev: "上一篇", next: "下一篇" },
    search: { provider: "local" },
  },
});
