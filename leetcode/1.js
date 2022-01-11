/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const lack = target - n

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === lack) {
        return [i, j]
      }
    }
  }
}

//  哈希
const twoSum2 = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const lack = target - nums[i]
    if (map[lack] !== undefined) {
      return [map[lack], i]
    }
    map[nums[i]] = i
  }
}
