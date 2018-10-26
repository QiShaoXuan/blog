# 节流 & 防抖

## 函数节流 throttle

指某些代码不可以在没有间断的情况下连续重复执行

```javascript
function throttle (method,wait=1000,context){
    clearTimeout(method.tid)
    method.tid = setTimeout(function(){
        method.call(context)
    },wait)
}
```


##  函数防抖 debounce

指一个事件如果频繁触发，会隔一段时间执行一次

```javascript
function debounce(fn,delay,mustRunDelay){
    let timer = null
    let t_start
    return function(){
        let context = this
        let args = arguments
        let t_curr = +new Date()
        clearTimeout(timer)
        if(!t_start){
            t_start = t_curr
        }
        if(t_curr - t_start >= mustRunDelay) {
            fn.apply(context,args)
            t_start = t_curr
        } else {
            timer = setTimeout(function(){
                fn.apply(context,args)
            },delay)
        }
    }
}
```