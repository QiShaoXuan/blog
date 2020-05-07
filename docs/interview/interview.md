# 我会考什么

1. 写输出，说原因
```js
const map = new Map()

map.set(["aa"], 111)

console.log(map.get(["aa"]))
```

2. 写输出，如何正确输出 3

```js
function createIncrement(i) {
  let value = 0;
  function increment() {
    value += i;
    console.log(value);
    const message = `Current value is ${value}`;
    return function logValue() {
      console.log(message);
    };
  }

  return increment;
}

const inc = createIncrement(1);
const log = inc(); // 打印 1
inc();             // 打印 2
inc();             // 打印 3
log();             // 打印 1
```

3. react hook 中 useEffect 的第二个参数为什么是一个数组而不是可以传多个值
