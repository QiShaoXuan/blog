var singleNumber = function(arr) {
  const first = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (first === arr[i]) {
      arr.shift()
      arr.splice(i-1,1)
      return singleNumber(arr)
    }
  }
  return first
}
