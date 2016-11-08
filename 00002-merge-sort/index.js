// Based on CLRS pg30-37, modified to take advantage of some JS functionality
var merge = function(L, R) {
  console.log('L', L);
  console.log('R', R);
  var newArr = [],
    i = 0,
    j = 0,
    r = L.length + R.length;

  // "Sentinel" endpoints: simplies code- when we see infinity, we know it can't
  // be the smaller value unless both infinity have it exposed, and once we hit
  // that point, we know we can stop.
  L.push(Infinity);
  R.push(Infinity);

  // iterate through the entire length of both L and R
  for (var k = 0; k < r; k++) {

    // Add the lower value to the array and increment that side's index
    if (L[i] <= R[j]) {
      newArr.push(L[i]);
      i++;
    }
    else {
      newArr.push(R[j]);
      j++;
    }
  }
  console.log('final state:', newArr);
  return newArr;
};

// MergeSort!
var mergeSort = function(arr) {

  // If arr.length is 0 or 1 then no more sorting is needed
  if (arr.length <= 1) { return arr; }

  // Determine middle, and L, R, subarrays
  // Math.floor returns the greatest integer less than or equal to its input
  var mid = Math.floor(arr.length / 2);

  // Array.slice returns a subarray (from index, to index)
  var L = mergeSort(arr.slice(0, mid));
  var R = mergeSort(arr.slice(mid, arr.length));

  return merge(L, R);
};

var A = [5,2,4,7,1,3,2,6];

console.log('initial state:', A);

mergeSort(A);

/*
          sorted sequence
         [1 2 2 3 4 5 6 7]
          /             \
   [2 4 5 7]          [1 2 3 6]
   /       \          /       \
 [2 5]   [4 7]      [1 3]   [2 6]
 /   \   /   \      /   \   /   \
[5] [2] [4] [7]    [1] [3] [2] [6]

Divide: compute middle D(n) = Θ(1)

Conquer: Recursively solve L and R subproblems of size n/2 = 2T(n/2)

Combine: Merge procedure loops n times C(n) = Θ(n)

Height of the tree is lg n

The tree above is an example of a recursion tree:
T(n) =

       cn
      /  \
 T(n/2)  T(n/2)

=

            cn
        /        \
    cn/2         cn/2
    /  \         /   \
T(n/4) T(n/4) T(n/4) T(n/4)

=....

each level in the tree = cn

Sum of levels = cn lg n + cn

Remove lower-order term, and we're left with Θ(n lg n)
*/
