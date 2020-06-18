var singleNumber = function(nums) {
  //Return one and only number
  return nums.reduce((result, num) => result ^ num, 0)
};

//console.log(singleNumber([3,3,2,1,2]));