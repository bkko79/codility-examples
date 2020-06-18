function TapeEquilibrium(A){
    var p, idx;
    var leftSum = 0, rightSum = 0;
    var totalSum = 0;
    var lastMin, currentMin;
    var N = A.length;
    
    if (N == 2) { return Math.abs(A[0] - A[1]); }
    if (N == 1) { return Math.abs(A[0]); }
    
    for (idx=0; idx < N; idx++) {
        totalSum = totalSum + A[idx];
    }
    
    lastMin = Math.abs(totalSum - A[0] - A[0]);
    
    for (p = 1; p <= N-1; p++) {
        leftSum += A[p - 1];
        rightSum = totalSum - leftSum;
        currentMin = Math.abs(leftSum - rightSum);
        lastMin = (currentMin < lastMin) ? currentMin : lastMin;
    }
    
    return lastMin;    
}

console.log(TapeEquilibrium([3,1,2,4,3]))