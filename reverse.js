var reverse = function(x) {
  x = parseInt(x.toString().split('').reverse().join(''), 10) * Math.sign(x)
  if(x > Math.pow(2, 31) -1 || x < -Math.pow(2, 31)) return 0;
  return x;
};

//console.log(reverse(-43847283))