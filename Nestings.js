function Nesting(S){
  let brackets = {
    "(": ")"
  }
  let stack = []

  for( let i = 0; i < S.length; i++ ){
    if ( brackets[S.charAt(i)] ) {
      stack.push(S.charAt(i))
    } else if ( brackets[stack[stack.length-1]] === S.charAt(i) ){
      stack.pop()
    } else {
      return 0
    }
  }

  if (stack.length === 0){
    return 1
  } else {
    return 0
  }
}

//console.log(Nesting("((()))"))
//console.log(Nesting("(())("))
//console.log(Nesting("(()))"))