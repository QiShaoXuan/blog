/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return ''
  }
  return splitTow(strs)
}

function splitTow(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)
  return getCommonByTow(splitTow(left), splitTow(right))
}

function getCommonByTow(str1, str2) {
  let commonStr = ''
  for (let i = 0; i < str1.length && i < str2.length; i++) {
    if (str1[i] === str2[i]) {
      commonStr += str1[i]
    } else {
      break
    }
  }
  return commonStr
}
