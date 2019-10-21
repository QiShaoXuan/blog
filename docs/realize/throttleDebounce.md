# 节流 & 防抖

## 函数节流 throttle

指定时间间隔内只会执行一次任务

常用于滚动条滚动监听等

<<< ./realize/throttle.js

##  函数防抖 debounce

任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行

即：用户在不触发事件时，才触发相应动作，以抑制本来在事件中要执行的动作。

常用于用户输入验证等

<<< ./realize/debounce.js

:::tip
<a href="http://demo.nimius.net/debounce_throttle/">查看 `throttle` 和 `debounce` 可视化的差异</a>
:::
