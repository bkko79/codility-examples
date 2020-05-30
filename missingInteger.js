function MissingInteger(A){
  let min = 1;
  A.sort((a,b) => a-b );
  for (let i in A) {
    if (A[i] > -1 && A[i] == min) {
      min++;
    }
  }

  return min;
}

console.log(MissingInteger([1,2,3,6,1,4]))