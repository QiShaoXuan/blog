function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }

    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
  }

  return arr
}
