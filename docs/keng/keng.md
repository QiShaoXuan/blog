# 记录

1. 在使用 `node.appendChild(childNode)` 时，如果 `childNode` 是另一个元素的子元素，那么在 append 后，该元素会从其父元素中删除。也就是说在父元素中 `forEach` 循环时不应该 `appendChild`。
2. 在微信小程序中使用 webview 页面跳转链接，链接地址不能使用 `http` 且不能带有 `#` 否则页面会跳转两次
3. `Object.assign(a,b)` 会将 `b` 对象的属性覆盖至 `a` 属性，但是仅会覆盖第一层。

```js
let objA = {
  attrs: {
    class: "classname",
    style: "color: red;"
  }
};

let objB = {
  attrs: {
    class: "this is classname"
  }
};

let assignObj = Object.assign(objA, objB);

//assignObj = {
//  attrs: {
//    class: 'this is classname'
//    }
//}
```

4. ios 中日期转换不能识别 '-' 连接的日期

```js
const date = "2020-05-21 18:40:03";
// 通常写法
const currentTime = new Date(date).getTime();
// 兼容 ios 写法
const currentTime = new Date(date.replace(/-/g, "")).getTime();
```
