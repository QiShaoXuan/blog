## 判断可选链

```typescript
function checkChaining(data: {} = {}, chain: string = "") {
  const chainArr = chain.split(".");
  if (chainArr.length === 0) {
    return data;
  }
  return chainArr.reduce((a, b) => {
    return a && a[b] ? a[b] : undefined;
  }, data);
}
```
