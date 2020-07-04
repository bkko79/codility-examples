// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function test(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 1) return 1

    let first = A[0]
    let second = A[1]
    let compare
    let token = true
    
    let current = 2
    let max = 2
    
    for ( let i = 2; i < A.length; i++ ){
        if (token === true){
            compare = first
        } else {
            compare = second
        }
        
        if (A[i] === compare){
            token = !token
            console.log(token)
            current++
            continue
        } else {
            if (current > max ){
                max = current
            }
            first = A[i-1]
            second = A[i]
            current = 2
            token = true
        }
    }
 

    return current > max ? current : max
}


console.log(solution([3,2,3,2,3]))
console.log(solution([7, 4, -2, 4, -2, -9]))


