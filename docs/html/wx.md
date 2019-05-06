# 微信小程序的一些注意点

## 路由配置

在 `app.json` 中 `pages` 定义的第一个页面为路由起始页

## 不支持 SVG

解决方案：

1. 使用 iconfont 替换单色图标
2. 使用图片代替彩色图标

## webview 相关
webview 相当于小程序的 iframe

1. webview 加载完成后会自动铺满整个小程序页面，盖住页面上的元素。

解决方案：

使用 cover-view 标签，在安卓系统中需要通过 `setTimeout`，在加载完成后显示 cover-view

2. webview 中不显示 input

## === 存在隐式转换

解决方案：

使用 == 替换

## 数组的数据监听存在问题

```vue
<input type="number" bindinput="codeInput" data-index="0" class="{{ activeInput['0'] === ''? '':'is-active' }}"/>
<input type="number" bindinput="codeInput" data-index="1" class="{{ activeInput['1'] === ''? '':'is-active' }}"/>
```
```js
nx.Component({
  data: {
    activeInput: []
  },
  methods: {
    codeInput(inEvent) {
      const index = Number(inEvent.target.dataset.index);
      const value = inEvent.detail.value;

      this.setData({ [`activeInput.${index}`]: value });
    },
   }
});
```

解决方案：

将 data 写做类数组的形式

```js
nx.Component({
  data: {
    activeInput: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      length: 6
    }
  },
});
```

## cover-view 注意

1. 不能通过 `z-index` 来设置 cover-view 的层级，可以使用加载顺序来影响它的层级





