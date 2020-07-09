function mergeSortedArrays(A, B){
  //Exception errors
  //what if data is not number
  //what if A or B is empty
  if ( A.length === 0 && B.length > 0){
    return B
  } else if (B.length === 0 && A.length > 0){
    return A
  } else if ( A.length === 0 && B.length === 0){
    return []
  }

  A.sort( (a, b) => { a - b} )
  B.sort( (a, b) => { a - b} )

  let index1 = 0
  let index2 = 0

  let sorted = []

  for (let i = 0; i < A.length+B.length; i++){
    if (A[index1] <= B[index2] || index2 == B.length){
      sorted.push(A[index1])
      index1++
    } else if ( B[index2] <= A[index1] || index1 == A.length){
      sorted.push(B[index2])
      index2++
    }
  }
  return sorted
}

console.log(mergeSortedArrays([4,6,30],[0,3,4,31]))
console.log(mergeSortedArrays([],[0,3,4,31]))
console.log(mergeSortedArrays([4,6,30],[]))
console.log(mergeSortedArrays([],[]))