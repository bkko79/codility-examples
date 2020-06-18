var twoSum = function(nums, target) {
  const memo = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (memo.has(target - nums[i])) {
          return [memo.get(target - nums[i]), i];
      }
      memo.set(nums[i], i);
  }
};

//console.log(twoSum([3,3],6))