// 不理解，先复制记录下来 ...
Array.prototype.bucketSort = function(num) {
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  const max = Math.max(...this)
  const min = Math.min(...this)
  const buckets = []
  const bucketsSize = Math.floor((max - min) / num) + 1
  for(let i = 0; i < this.length; i++) {
    const index = ~~(this[i] / bucketsSize)
    !buckets[index] && (buckets[index] = [])
    buckets[index].push(this[i])
    let l = buckets[index].length
    while(l > 0) {
      buckets[index][l] < buckets[index][l - 1] && swap(buckets[index], l, l - 1)
      l--
    }
  }
  let wrapBuckets = []
  for(let i = 0; i < buckets.length; i++) {
    buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
  }
  return wrapBuckets
}
