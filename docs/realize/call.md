# call && apply


<<< ./realize/call.js
<<< ./realize/apply.js

::: tip
`eval(string)`

>string必需。要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。该方法只接受原始字符串作为参数，如果 string 参数不是原始字符串，那么该方法将不作任何改变地返回。因此请不要为 eval() 函数传递 String 对象来作为参数。

简单的，`eval` 可以看做 `<script>` 标签

所以 `var result = eval('context.fn(' + args +')')` 在解析后可看做

` var result = context.fn(arguments[1], arguments[2], ...)`
:::
