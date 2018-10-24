module.exports = {
  title: 'blog',
  description: '齐少轩的blog, blog from Qi',
  dest: './dist',
  base: '/blog/',
  repo: 'https://qishaoxuan.github.io/blog/',
  head: [
    ['link', { rel: 'icon', href: `/images/logo.png` }],

    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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

