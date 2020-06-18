var moveZeros = function(nums) {
  let i = 0
 
  for(index in nums){
      if(nums[index] !== 0) {
         nums[i] = nums[index]
          i++
      }
  }

  nums.fill(0, i, nums.length)
  return nums
};

//console.log(moveZeros([0,1,0,1,4,5,3]))