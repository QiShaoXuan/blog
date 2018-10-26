# getBoundingClientRect

`rectObject = element.getBoundingClientRect()`

返回值是一个 `DOMRect` 对象，`DOMRect` 对象包含了一组用于描述边框的只读属性——left、top、right、bottom、x 和 y，单位为像素。除了 width 和 height 外的属性都是相对于**视口**的左上角位置而言的。

```javascript
DOMRect = {
  bottom: --,
  height: --,
  left: --,
  right: --,
  top: --,
  width:  --,
  x: --,
  y: --,
}
```

如需获取相对于整个网页左上角定位的属性值，则还需加上当前的滚动位置，配合 `window.pageXOffset` 和 `window.pageYOffset` 使用