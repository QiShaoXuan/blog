var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let arrIndex = nums.findIndex(v => v === target - nums[i])
    if (arrIndex !== -1 && arrIndex !== i) {
      return [i, arrIndex]
    }
  }
}
