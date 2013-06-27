function array_fill (start_index, num, mixed_val) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Waldo Malqui Silva
  // *     example 1: array_fill(5, 6, 'banana');
  // *     returns 1: { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' }
  var key, tmp_arr = {};

  if (!isNaN(start_index) && !isNaN(num)) {
    for (key = 0; key < num; key++) {
      tmp_arr[(key + start_index)] = mixed_val;
    }
  }
  return tmp_arr;
}

function eratosthenes_sieve(sieve, max_numbers) {
  var i = 2;
  var j, size = 0;
  primes = new Array();
  while (1) {
    if (sieve[i] == 0) {
      primes.push(i);
      size = primes.filter(function(value) { return value !== undefined }).length;
      if ( size >= max_numbers ) {
        return primes;
      }      
      j = i;
      while (j <= max_numbers) {
        sieve[j] = 1;
        j += i;
      }
    }
    i++;
  }
  return primes;
}
 
var max_numbers = 100;
var sieve = array_fill(0, max_numbers, 0);
// 2, 3, 5, 7, ..., 97
var primes = eratosthenes_sieve(sieve, max_numbers);

console.log(primes);
