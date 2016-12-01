// Based on CLRS chapter 8.3
function radixSort(A, d) {
  for (var i = 0; i < d; i++) {
    A = countingSort(A, 10, i);
  }
  return A;
}

// Get the single digit from each number
function digit(number, exp) {;
  return parseInt(number / Math.pow(10, exp) % 10);
}

// Get the number of digits in the max value
function numberOfDigits(A) {
  return Math.max.apply(null, A).toString().length;
}

// A: input array to be sorted
// k: a number such that all keys are in range 0..k-1
// O(k+n). In practice, when k = O(n), then O(n)
function countingSort(A, k, exp) {
  // C is temp array for storage; it is a histogram of key frequencies.
  // B will be the output sorted array.
  var C = [], B = [];

  // Setup C to be all zeros in the histogram.
  // O(k)
  for (var i=0; i < k; i++) {
    C.push(0);
  }
  // console.log('C', C);

  // Build up histogram C. This is the frequency of each key in the array.
  // O(n), where n = A.length
  for (var j=0; j < A.length; j++) {
    var d = digit(A[j], exp);
    C[d]++;
  }
  // console.log('C', C);

  // Calculate the starting index of each key
  // How many input elements are <= to i by keeping running sum of array C
  // O(k)
  for (var i=1; i < k; i++) {
    C[i] = C[i] + C[i-1];
  }
  // console.log('C', C);

  //O(n), where n = A.length
  for (var j=A.length-1; j >= 0; j--) {
    var d = digit(A[j], exp);

    // Place A[j] into proper place in output array B
    B[C[d]-1] = A[j];

    // In case elements are not distinct, decrement from C, which causes the
    // next input element with a value equal to A[j], if one exists, to go to
    // the position immediately before A[j] in the output array.
    C[d]--;
    // console.log('C', C);
  }
  // console.log('B', B);
  return B;
}

var A = [
  329, 457, 657, 839, 436, 720, 355
];
var d = numberOfDigits(A);

console.log('Initial array = [' + A.join(', ') + ']');
var B = radixSort(A, d);
console.log('Final array = [' + B.join(', ') + ']');
console.log('');
