function isPermute(A){
  let hash = {}
  for (let i = 0; i < A.length; i++){
    if ( hash[A[i]] === true ) return 0
    if ( A[i] > A.length ) return 0
    hash[A[i]] = true;
  }
  return 1
}

//console.log(isPermute([1,2,3,4]))