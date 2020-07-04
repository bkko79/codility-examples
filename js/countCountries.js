function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  countries = 0
  height = A.length
  width  = A[0].length
  
  let markCountry = function(A, i, j, current){
      if ( i < 0 || i > height - 1 || j < 0 || j > width ){
          return
      }
      if (A[i][j] !== current){
          return
      }
      A[i][j] = -1
      markCountry(A, i-1, j, current)
      markCountry(A, i+1, j, current)
      markCountry(A, i, j-1, current)
      markCountry(A, i, j+1, current)
  }
  
  for ( let i = 0; i < height; i++){
      for (let j = 0; j < width; j++){
          let current = A[i][j]
          console.log(A)
          if (current !== -1){
              countries++
              markCountry(A, i, j, current)
          }
      }
  }
  
  
  return countries
}


console.log(solution([[5,4,5],[5,3,5]]))