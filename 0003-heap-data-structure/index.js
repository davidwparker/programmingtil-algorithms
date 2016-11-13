// Based on CLRS chapter 6.1-6.4

// Max Heapify assumes that the binary trees rooted at Left(i) and Right(i) are
// max heaps, but that A[i] might be smaller than its children, thus violating
// the max heap property.
// Max Heapify lets the value at A[i] "float down" in the max heap so that the
// subtree rooted at index i obeys the max-heap property.
function maxHeapify(array, i) {
  var size = array.length;
  var largest = i;

  // Add plus one due to JS' indices
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var temp;

  //
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest != i) {
    // Exchange A[i] with A[largest]
    temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;
    console.log('Swapping elements : ' + array[i] + ' & ' + array[largest]);
    maxHeapify(array, largest);
  }
}

function buildMaxHeap(array) {
  for (i = Math.ceil(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i);
  }
}

var A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
console.log('Initial array = [' + A.join(', ') + ']');
maxHeapify(A, 1);
console.log('Final array = [' + A.join(', ') + ']');
console.log('');

var B = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
console.log('buildMaxHeap initial = [' + B.join(', ') + ']');
buildMaxHeap(B);
console.log('buildMaxHeap final = [' + B.join(', ') + ']');
