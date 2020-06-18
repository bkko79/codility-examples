function permCheck(A){
  let count = [];
    
  for (let i = 0; i < A.length; i++) {
      if (A[i] > A.length+1)
          return 0;
      
      if (count[A[i]-1] === undefined)
          count[A[i]-1] = 1;
      else
          return 0;
  }
  
  for (let i = 0; i < count.length; i++) {
      if (count[i] === undefined)
          return 0;
  }
  
  return 1;
}

console.log(permCheck([4,1,2,3]))
console.log(permCheck([1,4,1]))