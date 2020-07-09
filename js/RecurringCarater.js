function RecurringCarater(A){
  const hash = new Set()

  for (let i = 0; i < A.length; i++){
    value = A[i]
    if ( hash.has(value) ){
      return value
    } else {
      hash.add(value)
    }
  }

  return undefined
}

console.log(RecurringCarater([2,5,1,2,3,5,1,2,4]))
console.log(RecurringCarater([2,1,1,2]))
console.log(RecurringCarater([2,3,4,5]))
console.log(RecurringCarater([]))