function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] < right[0])
      result.push(left.shift());
    else
      result.push(right.shift());
  }

  return result.concat(left, right);
}

function mergeSort(a) {
  if (a.length === 1)
    return a;

  var work = [];
  for (var i = 0, len = a.length; i < len; i++)
    work.push([a[i]]);

  work.push([]); // 如果数组长度为奇数

  for (var lim = len; lim > 1; lim = ~~((lim + 1) / 2)) {
    for (var j = 0, k = 0; k < lim; j++, k += 2)
      work[j] = merge(work[k], work[k + 1]);

    work[j] = []; // 如果数组长度为奇数
  }

  return work[0];
}
