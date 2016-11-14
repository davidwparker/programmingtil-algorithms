// Based on CLRS chapter 6.1-6.4

// Max Heapify assumes that the binary trees rooted at Left(i) and Right(i) are
// max heaps, but that A[i] might be smaller than its children, thus violating
// the max heap property.
// Max Heapify lets the value at A[i] "float down" in the max heap so that the
// subtree rooted at index i obeys the max-heap property.
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
    // console.log('Swapping elements : ' + array[i] + ' & ' + array[largest]);
    maxHeapify(array, largest);
  }
}

function buildMaxHeap(array) {
  for (i = Math.ceil(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i);
  }
}

function heapSort(array) {
  var temp;

  // Initially, heapSize is the length of the array
  array.heapSize = array.length;

  // O(n)
  buildMaxHeap(array);

  // O(n-1) * O(lg n) = O(n lg n)
  for (var i = array.length-1; i >= 0; i--) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    array.heapSize--;
    console.log('array = [' + array.join(', ') + ']');
    maxHeapify(array, 0);
  }
}

var A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
console.log('Initial array = [' + A.join(', ') + ']');
heapSort(A, 1);
console.log('Final array = [' + A.join(', ') + ']');
console.log('');
