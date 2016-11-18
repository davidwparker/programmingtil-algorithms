// Based on CLRS chapter 6.5

// Max Heapify assumes that the binary trees rooted at Left(i) and Right(i) are
// max heaps, but that A[i] might be smaller than its children, thus violating
// the max heap property.
// Max Heapify lets the value at A[i] "float down" in the max heap so that the
// subtree rooted at index i obeys the max-heap property.
// O(lg n)
function maxHeapify(array, i) {
  var largest = i;

  // Add plus one due to JS' indices
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var temp;

  // Set the largest to be either left or right
  if (left < array.heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < array.heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest != i) {
    // Exchange A[i] with A[largest]
    temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;
    maxHeapify(array, largest);
  }
}

// O(n)
function buildMaxHeap(array) {
  for (i = Math.ceil(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i);
  }
}

// O(1)
function heapMax(array) {
  return array[0];
}

// O(lg n) => constant work on top of maxHeapify
function heapExtractMax(array) {
  if (array.heapSize < 0) {
    console.log("error > heap underflow!");
    return;
  }

  var max = array[0];
  array[0] = array[array.heapSize];
  array.heapSize--;
  maxHeapify(array, 0);
  console.log('heapExtractMax:', max);
  return max;
}

function parent(i) {
  return Math.ceil(i/2) - 1;
}

// O(lg n), since the path from node update (array[i] = key) to the root has length of O(lg n)
function heapIncreaseKey(array,i,key) {
  if (key < array[i]) {
    console.log("error > new key is smaller than current key");
    return;
  }

  var temp;
  array[i] = key;
  while (i > 0 && array[parent(i)] < array[i]) {
    // console.log(key, '...i=', i, array[i], '...parent=', parent(i), array[parent(i)]);
    temp = array[i];
    array[i] = array[parent(i)];
    array[parent(i)] = temp;
    i = parent(i);
    // console.log(key, '...i=', i, array[i], '...parent=', parent(i), array[parent(i)]);
  }
}

// O(lg n) => based on heapIncreaseKey
function maxHeapInsert(array,key) {
  // array.heapSize;
  // array[array.heapSize] = -Infinity;
  heapIncreaseKey(array, array.heapSize, key);
}

// function heapSort(array) {
//   var temp;
//
//   // Initially, heapSize is the length of the array
//   array.heapSize = array.length;
//
//   // Build the max heap
//   buildMaxHeap(array);
//
//   // O(n-1) * O(lg n) = O(n lg n)
//   for (var i = array.length-1; i >= 0; i--) {
//     temp = array[0];
//     array[0] = array[i];
//     array[i] = temp;
//     array.heapSize--;
//     console.log('array = [' + array.join(', ') + ']');
//     maxHeapify(array, 0);
//   }
// }

var A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
A.heapSize = A.length;
console.log('Initial array = [' + A.join(', ') + ']');
buildMaxHeap(A);
console.log('max heap array = [' + A.join(', ') + ']');

// heapExtractMax(A, 1);

// heapIncreaseKey(A, 8, 15);

// maxHeapInsert(A, 15);

console.log('Final array = [' + A.join(', ') + ']');
console.log('');
