function smallestInt(A){
  let max = Math.max.apply(null, A)
  let hash = {}
  A.forEach( (item) => hash[item] = true)

  for (let i = 1; i <= max; i++){
    if (!hash[i]) return i
  }
  if ( max < 0) return 1
  return max + 1
}
//console.log(smallestInt([1,2,3]))