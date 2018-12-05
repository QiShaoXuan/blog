var findMedianSortedArrays = function (nums1, nums2) {
  var arr = nums1.concat(nums2).sort((a, b) => a - b)

  if (arr.length % 2 === 1) {
    return arr[(arr.length - 1) / 2]
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
  }
}


var findMedianSortedArrays = function (nums1, nums2) {
  var total = nums1.length + nums2.length
  var half = total % 2 === 1 ? (total - 1) / 2 : total / 2

  if (total % 2 === 1) {
    return findKth(nums1, nums1.length, nums2, nums2.length, half + 1)
  }
  else {
    return (findKth(nums1, nums1.length, nums2, nums2.length, half) + findKth(nums1, nums1.length, nums2, nums2.length, half + 1)) / 2
  }
}

function findKth(a, m, b, n, k) {
  // always assume that m is equal or smaller than n
  if (m > n)
    return findKth(b, n, a, m, k)
  if (m === 0)
    return b[k - 1]
  if (k === 1)
    return Math.min(a[0], b[0])

  // divide k into two parts
  var pa = Math.min(k >> 1, m)
    , pb = k - pa

  if (a[pa - 1] < b[pb - 1])
    return findKth(a.slice(pa), m - pa, b, n, k - pa)
  else if (a[pa - 1] > b[pb - 1])
    return findKth(a, m, b.slice(pb), n - pb, k - pb)
  else
    return a[pa - 1]
}
