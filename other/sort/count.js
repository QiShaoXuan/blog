function countSort(arr) {
  let C = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    C[num] >= 1 ? C[num]++ : (C[num] = 1)
  }

  let sortArr = []

  for (let j = 0; j < C.length; j++) {
    if(C[j]){
      while(C[j]>0){
        sortArr.push(j)
        C[j] --
      }
    }
  }
  return sortArr
}
