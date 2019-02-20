# 原型继承

在 ES6 非常普及的现在，被人突然问到如何使用 ES5 实现原型继承还是真是有点懵。所以特地记下。

## ES6

```js
class Animal{
  constructor(){}
}
class Cat extends Animal{
  constructor(){
    super()
  }
}
```

## ES5

```js
function Animal(){
  this.type = 'Animal'
  this.eat = function(){}
}

function inherit(parent,child) {
  const F = function(){}
  F.prototype = parent.prototype
  child.prototype = new F()
  child.constructor = child
}

function Cat(props){
  Animal.call(this,props)
  this.name = 'Cat'
}

inherit(Animal,Cat)
```

仅使用 `call` 方法调用 `Animal` 构造函数并不算实现继承，因为对象的原型是：

```
new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
```

所以需要通过一个媒介（一个空函数），将原型链桥接过来，成为：

```
new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null
```
