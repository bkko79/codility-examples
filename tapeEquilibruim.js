function TapeEquilibrium(A){
  let p, idx;
  let leftSum = 0,
      rightSum = 0;
  let totalSum = 0;
  let lastMin, currentMin;
  let N = A.length;
  let add = function (a, b) {
      return a + b;
  };

  if (N == 2) {
      return Math.abs(A[0] - A[1]);
  }
  if (N == 1) {
      return Math.abs(A[0]);
  }

  totalSum = A.reduceRight(add);

  lastMin = Math.abs(totalSum - A[0] - A[0]);

  for (p = 1; p <= N - 1; p++) {
      leftSum += A[p - 1];
      rightSum = totalSum - leftSum;
      currentMin = Math.abs(leftSum - rightSum);
      lastMin = (currentMin < lastMin) ? currentMin : lastMin;
  }

  return lastMin;
}

//console.log(TapeEquilibrium([3,1,2,4,3]))