module.exports = {
  title: 'blog',
  description: '齐少轩的blog, blog from Qi',
  dest: './dist',
  base: '/blog/',
  repo: 'https://qishaoxuan.github.io/blog/',
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-include'), './')
    }
  },
  themeConfig: {
    nav: [
      { text: 'css tricks', link: 'https://qishaoxuan.github.io/css_tricks/' },
      { text: 'js tricks', link: 'https://qishaoxuan.github.io/js_tricks/' },
      { text: 'GitHub', link: 'https://github.com/QiShaoXuan/blog' },
    ],
    sidebar: [
      {
        title: 'you need to know js',
        collapsable: false,
        children: [
          '/youNeedToKnowJs/insertAdjacentHTML',
          '/youNeedToKnowJs/implementation',
          '/youNeedToKnowJs/messageChannel',
          '/youNeedToKnowJs/throttleDebounce',
          '/youNeedToKnowJs/documentFragment',
          '/youNeedToKnowJs/copy',
          '/youNeedToKnowJs/mutationObserver',
        ]
      },
    ]
  }
}

