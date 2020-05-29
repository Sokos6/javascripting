function isPrime(num) {
  if (num === 2) return true;
  if (num <= 1) return false;

  let num2 = Math.sqrt(num);

  for (let i = 2; i <= num2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(40));
console.log(isPrime(101));