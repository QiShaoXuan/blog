function heapSort(arr){
  function swap(i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  function max_heapify(start, end) {
    let dad = start
    let son = dad * 2 + 1

    if (son >= end) return

    if (son + 1 < end && arr[son] < arr[son + 1]){
      son++
    }

    if (arr[dad] <= arr[son]) {
      swap(dad, son)
      max_heapify(son, end)
    }
  }

  let len = arr.length

  for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
    max_heapify(i, len)
  }

  for (let i = len - 1; i > 0; i--) {
    swap(0, i)
    max_heapify(0, i)
  }

  return arr
}
