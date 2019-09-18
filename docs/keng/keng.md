# 记录

1. 在使用 `node.appendChild(childNode)`  时，如果 `childNode` 是另一个元素的子元素，那么在 append 后，该元素会从其父元素中删除。也就是说在父元素中 `forEach` 循环时不应该 `appendChild`。
2. 在微信小程序中使用 webview 页面跳转链接，链接地址不能使用 `http` 且不能带有 `#` 否则页面会跳转两次




