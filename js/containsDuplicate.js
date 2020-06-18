var containsDuplicate = function(nums) {
  //If array contains duplicated items
  return (new Set(nums)).size !== nums.length;
};

//console.log(containsDuplicate([1,2,3,4]));