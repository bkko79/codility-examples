var removeDuplicates = function(nums) {
  //Remove Duplicates from Sorted Array
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if(nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]
    }
  }
  return i + 1
};

//console.log(removeDuplicates([1,1,2,2,2,3,4,4,5]));