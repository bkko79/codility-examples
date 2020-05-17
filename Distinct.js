function Distinct(A){
  let hash = {}
  for (let i = 0; i < A.length; i++){
    hash[A[i]] = true
  }
  return Object.keys(hash).length
}

//console.log(Distinct([2,2,2,1,3,1]))