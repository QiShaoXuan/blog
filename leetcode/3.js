var lengthOfLongestSubstring = function (s) {
  const map = {}
  var left = 0

  return s.split('').reduce((max, v, i) => {
    console.log(left,max)
    left = map[v] >= left ? map[v] + 1 : left
    map[v] = i
    console.log(map)
    console.log('----')
    // return Math.max(max, i - left + 1)
    return  i - left + 1
  }, 0)
}
//
console.log('res:')
console.log(lengthOfLongestSubstring('dvdf'))

// var lengthOfLongestSubstring = function(s) {
//   var res = 0; // 用于存放当前最长无重复子串的长度
//   var str = ""; // 用于存放无重复子串
//   var len = s.length;
//   for(var i = 0; i < len; i++) {
//     var char = s.charAt(i);
//     var index = str.indexOf(char);
//     if(index === -1) {
//       str += char;
//       res = res < str.length ? str.length : res;
//     } else {
//       str = str.substr(index + 1) + char;
//     }
//   }
//   return res;
// };
// console.log(lengthOfLongestSubstring('dvdf'))
