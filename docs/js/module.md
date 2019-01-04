# 模块

在使用 `rollup` 或者 `browserify` 时总遇到打包模式选择的问题，这里记录总结一下。

## what ?

- 将一个复杂的程序根据不同的规则（逻辑，分工）分成不同的模块，使之条理的组合在一起工作
- 模块的内部数据与实现是私有的，外部仅能通过模块暴露的方法与属性与之通信或调用

## why ?

- 避免命名冲突(减少命名空间污染)
- 更好的分离, 按需加载
- 更高复用性
- 高可维护性

## 原始的模块化

‘原始’指的是时间上的原始，存在于大部分前后未分离的项目中

存在的问题：
- 全局作用域下容易造成变量冲突
- 外部可以随意更改内部的数据和方法，维护困难
- 文件只能按照 `script` 的书写顺序进行加载，会造成多个请求
- 开发人员必须主观解决模块和代码库的依赖关系
- 在大型项目中各种资源难以管理，长期积累的问题导致代码库混乱不堪

### 全局function模式 
将不同的功能封装成不同的全局函数

```js
function foo(){}
function bar(){}
```

### namespace (命名空间)

将数据和功能放在对象中

```js
const module1 = {
  data:'https://qishaoxuan.github.io/blog/',
  foo:function(){},
  bar:function(){}
}
```

### IIFE (立即调用的函数表达式)

匿名函数自调用(闭包)

通过在全局对象 `window` 上挂载属性或方法来暴露接口

保证模块独立性的同时，也使得模块之间的依赖关系变得明显

```js
(function(window, $) {
  let data = 'www.baidu.com'
  //操作数据的函数
  function foo() {
    console.log(otherFun())
  }
  function bar() {}
  function otherFun() {
    return 'hello, world'
  }
  //暴露行为
  window.module1 = { foo, bar }
})(window, jQuery)
```
```html
<script type="text/javascript" src="jquery-1.10.1.js"></script>
<script type="text/javascript" src="module.js"></script>
<script type="text/javascript">
  module1.foo()
</script>
```

## 模块化规范

为了解决上述‘原始’方法的问题，不同的模块规范出现了。

### CommonJS

通过 `require` 方法来同步加载所要依赖的其他模块，然后通过 `exports` 或 `module.exports` 来导出需要暴露的接口

nodejs 采用该规范

```js
// modle1.js
const foo = 1
const bar = () => {return 'hello, world'}

module.exports.foo = foo
module.exports.bar = bar

// 也可以写为

module.exports = {
  foo:foo,
  bar:bar
}
```
```js
// main.js
const module1 = require('./module1.js')

function aa() {
  console.log(module1.bar())
}
```

`CommonJS` 加载模块是同步的，在服务器环境下是没问题的，然而在浏览器中，同步加载会导致性能、可用性、调试和跨域访问等问题。借助 `browserify` 可以解决，但是也使得下述两种规范的诞生。

### AMD

AMD 规范只有一个主要接口 define(id?, dependencies?, factory)，它要在声明模块的时候指定所有的依赖 dependencies，并且还要当做形参传到 factory 中，对于依赖的模块提前执行，依赖前置。

```js
define("module", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue
});
require(["module", "../file"], function(module, file) { /* ... */ })
```

优点：
- 适合在浏览器环境中异步加载模块
- 可以并行加载多个模块

缺点：
- 提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不顺畅
- 不符合通用的模块化思维方式，是一种妥协的实现

### CMD

CMD 与 AMD 的区别

- 对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行(根据写法不同，处理方式不通过)
- CMD推崇依赖就近，AMD推崇依赖前置

```js
// module1.js
//定义没有依赖的模块
define(function(require, exports, module){
  exports.foo = value
  module.exports = value
})
```
```js
//  module4.js
//定义有依赖的模块
define(function(require, exports, module){
  //引入依赖模块(同步)
  var module2 = require('./module2')
  //引入依赖模块(异步)
    require.async('./module3', function (m3) {
    })
  //暴露模块
  exports.xxx = value
})
```
```js
// main.js
define(function (require) {
  var m1 = require('./module1')
  var m2 = require('./module4')
})
```

### UMD (通用模块规范)

UMD 兼容了 AMD 和 CommonJS，同时还支持老式的“全局”变量规范：

```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    方法
    function a(){}  
    function b(){}
    function c(){} 
 
    //    暴露公共方法
    return {
        b: b,
        c: c
    }
}));
```

### ES6 模块

ECMAScript6 标准增加的 JavaScript 语言层面的模块体系定义。ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。



```js
// module1.js

export default function foo() {}
```
```js
// module2.js

export function bar () {}
export const a = 1
```

```js
// main.js

import jquery as $ from 'jquery'
import foo from './module1'
import {bar,a} from './module2'
```

ES6 模块与 CommonJS 模块的差异

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。




