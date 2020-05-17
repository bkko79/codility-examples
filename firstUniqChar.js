var firstUniqChar = function(s) {
  let map = {};
  for(const i of s){
    if (map[i] === undefined){
      map[i] = 1;
    } else {
      map[i]++;
    }
  }
  for (let j = 0; j < s.length; j++){
    let char = s.charAt(j);
    if (map[char] === 1){
      return j
    }
  }
  return -1
}

//console.log(firstUniqChar("tesltset"))