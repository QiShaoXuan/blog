/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  const map = {
    '(': ")",
    "{": "}",
    "[": "]"
  }
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      arr.push(s[i])
    } else {
      if (s[i] !== map[arr.pop()]) {
        return false
      }
    }
  }
  return !arr.length
};
