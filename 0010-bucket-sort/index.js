// Based on CLRS chapter 8.4
function insertionSort(A) {
  if (!A || !A.length) return;
  for (var j = 1; j < A.length; j++) {
    var key = A[j];
    var i = j - 1;
    while (i > -1 && A[i] > key) {
      A[i+1] = A[i];
      i--;
    }
    A[i+1] = key;
  }
  return A;
};

function bucketSort(A) {
  var n = A.length;
  var B = [];

  // Initialize B arrays and insert A[i] into different buckets
  // O(n)
  for (var i=0; i < n; i++) {
    var d = getFirstDigit(A[i]);
    // var d = getFirstChar(A[i]);
    B[d] = B[d] || [];
    B[d].push(A[i]);
  }

  // Sort individual buckets
  // O(n)
  for (var i=0; i < n; i++) {
    // this is the only line not O(n)
    B[i] = insertionSort(B[i]);
    // which leads to worst case of O(n^2), if all items in one bucket
    // average of O(n)
  }

  // for (var key in B) {
  //   B[key] = insertionSort(B[key]);
  // }

  // Combine into single bucket
  B = [].concat.apply([], B).filter(function(n){ return n != undefined });

  return B;
}

function getFirstDigit(n) {
  // Due to JS' problems with floating point numbers, we're using string
  // operations rather than something like % and toFixed:
  // parseInt((n % 1).toFixed(1).substring(2));
  return (n + "").split(".")[1].slice(0,1);
}

function getFirstChar(w) {
  return w.charCodeAt(0);
}

var A = [
  0.78, 0.17, 0.39, 0.26, 0.72,
  0.94, 0.21, 0.12, 0.23, 0.68
];

// var A = [
//   'fed', 'abd', 'acd', 'def', 'edf',
//   'de', 'abb', 'fff', 'ghi', 'cde'
// ];

console.log('Initial array = [' + A.join(', ') + ']');
var B = bucketSort(A);
console.log('Final array   = [' + B.join(', ') + ']');
console.log('');
