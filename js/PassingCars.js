function PassingCars(A){
  let result = 0
  let sum = 0

  for( let i = 0; i < A.length; i++){
    if (A[i] == 0 ) sum++
    if (A[i] == 1 ) result += sum
    if (result > 1000000000 ) return - 1
  }
  return result
}

//console.log(PassingCars([0,1,0,1,1]))