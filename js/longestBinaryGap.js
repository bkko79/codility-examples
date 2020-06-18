function longestBinaryGap(N) {
  // Error if not positive
  if (N < 0) return null;
  
  const binary = N.toString(2)
  const between = binary.slice(binary.indexOf('1')+1, binary.lastIndexOf('1'))
  
  const gaps = between.split('1').map(zeros => zeros.length)
  return gaps.length ? Math.max(...gaps) : 0
}

console.log(longestBinaryGap(21474647));