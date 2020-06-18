var intersect = function(nums1, nums2) {
  var store = nums1.reduce(function(map, n) {
    map[n] = (map[n] + 1) || 1;
    
    return map;
  }, {});

  return nums2.filter(function(n) {
    if (store[n]) {
      store[n]--;
      return true;
    } else {
      return false;
    }
  });
};

//console.log(intersect([4,9,5], [9,4,9,8,4]));