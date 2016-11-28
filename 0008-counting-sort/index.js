// Based on CLRS chapter 8.2

// A: input array to be sorted
// k: a number such that all keys are in range 0..k-1
// O(k+n). In practice, when k = O(n), then O(n)
function countingSort(A, k) {
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
    C[A[j]]++;
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

    // Place A[j] into proper place in output array B
    B[C[A[j]]-1] = A[j];

    // In case elements are not distinct, decrement from C, which causes the
    // next input element with a value equal to A[j], if one exists, to go to
    // the position immediately before A[j] in the output array.
    C[A[j]]--;
    // console.log('B', B);
    // console.log('C', C);
  }
  return B;
}

var A = [2,5,3,0,2,3,0,3];

console.log('Initial array = [' + A.join(', ') + ']');
var B = countingSort(A, 6);
console.log('Final array = [' + B.join(', ') + ']');
console.log('');
