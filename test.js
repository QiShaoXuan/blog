const arr = [1, 3, 4, 2, 9, 5, 3];

function insertSort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (let j = i; j >= 0; j--) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue;
    let minIndex;
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        minValue = arr[j];
        minIndex = j;
      }
    }

    temp = minValue;
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var partitionIndex = Math.floor(arr.length / 2);
  var tmp = arr[partitionIndex];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < tmp) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([tmp], quickSort(right));
}
