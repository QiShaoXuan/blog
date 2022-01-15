const getNum = (s) => {
  switch (s) {
    case"I":
      return 1
    case"V":
      return 5
    case "X":
      return 10
    case"L":
      return 50
    case"C":
      return 100
    case"D":
      return 500
    case"M":
      return 1000
  }
}
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (getNum(s[i]) < getNum(s[i + 1])) {
      num -= getNum(s[i])
    } else {
      num += getNum(s[i])
    }
  }
  return num
};
