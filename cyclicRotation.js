function CyclicRotation(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if ( K < 0 ) return A;
  
  if ( K > A.length ) {
    rotation = K % A.length
  } else {
    rotation = K
  }
  while(rotation > 0) {
    let last = A.pop()
    A.unshift(last)
    console.log(last)
    rotation--
  }
  return A
}

//console.log(CyclicRotation([1,2,3,4], 6));