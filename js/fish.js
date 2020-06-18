function fish(A,B){
  let down = []
  let up = []
  let direction
  
  for (var i = 0; i < A.length; i++) {
      direction = B[i]
      
      if (direction === 0) {
          while (down.length > 0) {
              var d = down.pop()
              
              if (d > A[i]) {
                  down.push(d)
                  break
              }
          }
      
          if (down.length === 0) {
              up.push(A[i])
          }
      } else {
          down.push(A[i])
      }
  }
  
  return down.length + up.length    
}

//console.log(fish([4,3,2,1,5],[0,1,0,0,0]))
//console.log(fish([4,3,2,1,5],[0,0,0,0,1]))