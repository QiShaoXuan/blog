# 节流 & 防抖

## 函数节流 throttle

指定时间间隔内只会执行一次任务

常用于滚动条滚动监听等

```javascript
function throttle(fn, threshhold) {
  var timeout
  var start = new Date
  var threshhold = threshhold || 160

  return function () {
    var context = this, args = arguments,
      curr = new Date() - 0

    clearTimeout(timeout)

    if (curr - start >= threshhold) {
      fn.apply(context, args) //只执行一部分方法，这些方法是在某个时间段内执行一次
      start = curr
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, threshhold)
    }
  }
}

```


##  函数防抖 debounce

任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行

即：用户在不触发事件时，才触发相应动作，以抑制本来在事件中要执行的动作。

常用于用户输入验证等

```javascript
function debounce(func, delay) {
    var timeout
    return function(e) {
        clearTimeout(timeout)
        var context = this, args = arguments
        
        timeout = setTimeout(function(){
          func.apply(context, args)
        },delay)
    }
}
```

:::tip
<a href="http://demo.nimius.net/debounce_throttle/">查看 `throttle` 和 `debounce` 可视化的差异</a>
:::
