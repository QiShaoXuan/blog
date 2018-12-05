function quickSort(arr) {
  if (arr.length < 2) return arr

  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    arr[i] >= pivot && right.push(arr[i])
    arr[i] < pivot && left.push(arr[i])
  }

  return quickSort(left).concat(pivot, quickSort(right))
}
