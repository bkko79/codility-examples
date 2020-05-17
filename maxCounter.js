function maxCounter(N, A){
  let counter = new Array(N).fill(0)
  let max = 0
  let tmpMax = 0

  A.forEach( (item) => {
    let i = item - 1
    if (item <= N){
      counter[i] = Math.max(counter[i], max)
      counter[i] += 1
      tmpMax = Math.max(counter[i], tmpMax)
    } else if ( item === N+1 ) {
      max = tmpMax
    } else {
      return
    }
  });

  counter.forEach( (item, idx, arr) => {
    arr[idx] = Math.max(item, max)
  })

  return counter
}

//console.log(maxCounter(5, [3,4,4,6,1,4,7,4]) )