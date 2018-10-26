# document.implementation

implementation 属性可返回处理该文档的 DOMImplementation 对象。

```javascript
function parseHTML(str) {
  let tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = str
  return tmp.body.children
}

parseHTML(htmlString)
```