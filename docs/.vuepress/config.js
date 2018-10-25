module.exports = {
  title: 'blog',
  description: 'blog from Qi',
  dest: './dist',
  base: '/blog/',
  repo: 'https://qishaoxuan.github.io/blog/',
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: 'blog from Qi' }],
    ['meta', { itemprop: 'name', content: 'js_trick' }],
    ['meta', { itemprop: 'image', content: '/js_tricks/images/favicon.png' }],
  ],
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
        title: 'JS',
        collapsable: false,
        children: [
          '/youNeedToKnowJs/insertAdjacentHTML',
          '/youNeedToKnowJs/implementation',
          '/youNeedToKnowJs/messageChannel',
          '/youNeedToKnowJs/throttleDebounce',
          '/youNeedToKnowJs/documentFragment',
          '/youNeedToKnowJs/copy',
          '/youNeedToKnowJs/mutationObserver',
          '/youNeedToKnowJs/getBoundingClientRect',
        ]
      },
    ]
  }
}

