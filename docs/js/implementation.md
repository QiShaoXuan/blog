# document.implementation

implementation 属性可返回处理该文档的 DOMImplementation 对象。

如果需要将一段 html 字符串转换为 Document Object Model （文档对象模型）,而不影响到当前的html内容，可以通过document.implementation.createHTMLDocument创建一个新的document实现

```javascript
function parseHTML(str) {
  let tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = str
  return tmp.body.children[0]
}

parseHTML(htmlString)
```

