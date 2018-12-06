function mergeSort(arr) {
  if (arr.length < 2) return arr

  function merge(left, right) {
    let final = []

    while (left.length && right.length) {
      final.push(left[0] <= right[0] ? left.shift() : right.shift())
    }
    return final.concat(left, right)
  }

  let mid = Math.floor(arr.length / 2)

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}
