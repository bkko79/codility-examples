function MissingInteger(A){
  var min = 1;
  A.sort((a,b) => a-b );
  console.log(A)
  for (var i in A) {
    if (A[i] > -1 && A[i] == min) {
      min++;
    }
  }

  return min;
}

console.log(MissingInteger([1,2,3,6,1,4]))