function isPrime(n) {
  i = 2;
  if (n == 2) {
    return true;    
  }
  sqrtN = Math.sqrt(n);
  while (i <= sqrtN) {
    if (n % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}
 
var max_numbers = 100;
var iterations = 1;
var primes = new Array();

while (1) {
  if (isPrime(iterations)) {
    primes.push(iterations);
    size = primes.filter(function(value) { return value !== undefined }).length;
    if ( size >= max_numbers ) {
      break;
    }
  }
  iterations++;
}
