// CLRS pg18-28
var insertionSort = function(arr) {
  console.log('initial state:', arr);

  // cost*times => c1 * n
  for (var j = 1; j < arr.length; j++) {
    // Loop Invariant
    // "At the start of each iteration of the for loop, the subarray
    // a[0..j-2] consistens of the elements originally in arr[0..j-2], but
    // in sorted order"

    // Set the key to the current "card" being moved into place.
    var key = arr[j];
    var i = j - 1;

    // Compare the key to each previous value, and if less, then set the next
    // one in each to the current value and decrement the i counter

    // Another way to write the while() loop as a for loop:
    // for (var i = j-1; i > -1 && arr[i] > key; i--) {
    // cost*times = c5 * sum(j=2 to n) tj
    while (i > -1 && arr[i] > key) {
      // console.log(key, arr[i], arr[i] > key );
      arr[i+1] = arr[i];
      i--;
    }
    arr[i+1] = key;
    console.log('next state:', arr);
  }
  console.log('final state:', arr);
  return arr;
};

var A = [5,2,4,6,1,3];

insertionSort(A);

// For brevity, I left off costs of statements such as key = arr[j], where the
// cost*times is time-1 of the previous loop.
// total cost (T(n)) is sum of individual statements cost*times statements.

// For constants a and b (representing c1... c8)
// Best case, already in order:
// T(n) = an+b, thus a linear function of n

// Worst case, reverse order:
// T(n) = an^2 + bn + c, thus a quadratic function of n

// In general, we usually concentrate on the worst-case running time.
// We also only care about the leading term in a formula (n^2 above) and discard
// the rest (bn + c), because lower-order terms are insignificant for large n

// thus, we result in "big-O" of Θ(n^2)

var best = [1,2,3,4,5,6];
var worst = [6,5,4,3,2,1];
console.log('');
console.log('\nbest');
insertionSort(best);
console.log('');
console.log('worst');
insertionSort(worst);
