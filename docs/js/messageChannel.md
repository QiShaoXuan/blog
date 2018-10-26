# MessageChannel
> `MessageChannel`接口允许我们创建一个新的消息通道，并通过它的两个MessagePort 属性发送数据。

`MessageChannel`创建了两个可通信的频道，每个频道可以通过`postMessage`方法发送信息，而另一个频道通过`onmessage`回调方法接受信息

```javascript
   const mc = new MessageChannel()
   let p1 = mc.port1
   let p2 = mc.port2
   p1.onmessage = function(e){console.log("port1 receive " + e.data)}
   p2.onmessage = function(e){console.log("port2 receive " + e.data)}
   p1.postMessage("hello, world")
   p2.postMessage("hi,world")
```
### 用途
- html和iframe之间的通讯
- web worker之间的通讯