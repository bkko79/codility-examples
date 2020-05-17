function longestBinaryGap(N) {
  // Error if not positive
  if (N <= 0) return null

  const binaryNum = N.toString(2);
  const binaryGaps = binaryNum.slice(binaryNum.indexOf('1') + 1, binaryNum.lastIndexOf('1'));
  const zeroCounted = binaryGaps.split('1').map(zeros => zeros.length);
  console.log(zeroCounted)

  return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}

//console.log(longestBinaryGap(21474647));