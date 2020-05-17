function MaxProductOfThree(A){
  A.sort((a, b) => {return a-b});

  const n = A[A.length-1] * A[A.length-2] * A[A.length-3];
  const m = A[0] * A[1] * A[A.length-1];
  return Math.max(n, m);
}

//console.log(MaxProductOfThree([-3,1,2,-2,5,6]))