# 排序

## 插入排序

1. 从第一个元素开始，该元素可以认为已经被排序。

2. 取出下一个元素，在已经排序的元素序列中从后向前扫描。

3. 如果该元素（已排序）大于新元素，将该元素移到下一位置。

4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置。

5. 将新元素插入到该位置后。

6. 重复步骤 2~5。

```js
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
```

## 冒泡排序

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。

3. 针对所有的元素重复以上的步骤，除了最后一个。

4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

```js
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
  
  return arr;
}
```

## 选择排序

直接从待排序数组中选择一个最小（或最大）数字，放入新数组中。

```js
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
```

## 快速排序

1. 在数据集之中，选择一个元素作为”基准”（pivot）。

2. 所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。这个操作称为分区 (partition)操作，分区操作结束后，基准元素所处的位置就是最终排序后它的位置。

3. 对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

```js
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
```
