function fiboEvenSum(n) {
  if (n <= 1) {
    return 0;
  } else {
    let nMinus2 = 1,
      nMinus1 = 2,
      value = 3,
      sum = 2;
    while (value < n) {
      if (value % 2 === 0) {
        sum += value;
      }
      nMinus2 = nMinus1;
      nMinus1 = value;
      value = nMinus1 + nMinus2;
    }
    return sum;
  }
}

console.log(fiboEvenSum(34));