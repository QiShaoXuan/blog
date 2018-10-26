# DocumentFragment
`DocumentFragment`接口表示没有父级的最小文档对象

因为`DocumentFragment`不是真实 DOM 树的其中一部分，它的变化不会引起 DOM 树的重新渲染操作(reflow) ，因此不会导致性能问题。

当我们需要修改多个节点时，可以创建一个`DocumentFragment`，在此节点进行添加(append)或被插入(inserted)操作。因为所有的节点会被一次性插入到文档中，而这个操作仅发生一个重渲染的操作，而不是每个节点分别被插入到文档中，因为后者会发生多次重渲染的操作。

```javascript
let frag = document.createDocumentFragment()
for (let i = 0; i < 100; i++) {
  let p = document.createElement("P")
  let text = document.createTextNode(i)
  p.appendChild(text)
  frag.appendChild(p)
}
document.body.appendChild(frag)
```