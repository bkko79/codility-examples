function maxDoubleSliceSum(A){
  let k1, k2 = []

  for (let i = 1; i < A.length-1; i++){
    k1[i] = Math.max(k1[i-1] + A[i], 0)
  }
  for (let j = A.length-2; j > 0; j--){
    k2[j] = Math.max(k2[j+1]+A[j], 0)
  }

  let max = 0

  for (let m = 1; m < A.length-1; m++){
    max = Math.max(max, k1[m-1]+k2[m+1])
  }

  return max
}

console.log(maxDoubleSliceSum([3,2,6,-1,4,5,-1,2]))