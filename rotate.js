var rotate = function(nums, k) {
  //simple way to rotate array
  let i = 0;
  while (i < k){
    nums.unshift(nums.pop())
    i++
  }
  return nums
};

//console.log(rotate([5,6,7,1,2,3,4]));