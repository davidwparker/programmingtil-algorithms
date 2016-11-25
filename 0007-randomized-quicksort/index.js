// Based on CLRS chapter 7.3

function randomizedPartion(array, p, r) {
  // Choose a random element from the array between 'p' to 'r' (including r) to swap out
  // Compute teh subarray to grab from
  var arr = array.slice(p, r+1);

  // Get a random element to swap out
  var el = arr[Math.floor(Math.random()*arr.length)];

  // Get the original index of that value to swap
  var i = array.indexOf(el);
  var temp = array[r];
  array[r] = el;
  array[i] = temp;
  return partition(array, p, r);
}

// Lomuto partition scheme
// Not covered: Hoare partition scheme (double while loop)
// O(n), where n = r - p + 1
function partition(array, p, r) {

  // Choose the last element to be the pivot element
  var pivot = array[r];
  // console.log(array, p, r, pivot);
  var i = p-1;

  // Starting at the first element and comparing to the next, "swap" elements
  // if the elements is lower than the pivot, until all elements have been moved
  // to either side of the array.
  for (var j=p; j <= r-1; j++) {
    if (array[j] <= pivot) {
      i++;
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // Swap out the pivot element with the position it needs to be in within the
  // array.
  var temp2 = array[i+1];
  array[i+1] = array[r];
  array[r] = temp2;
  // console.log('partitioned array:', array);
  return i;
}

// Best / Average case: O(n lg n)
// Worst case: O(n^2)
// p is low and r is high
function quicksort(array, p, r) {
  if (p < r) {
    part = randomizedPartion(array, p, r);
    quicksort(array, p, part);
    quicksort(array, part+1, r);
  }
}

var A = [2,8,7,1,3,5,6,4];

// An unbalanced example
// var A = [1,2,3,4,5,6,7,8];
console.log('Initial array = [' + A.join(', ') + ']');
quicksort(A, 0, A.length-1);
console.log('Final array = [' + A.join(', ') + ']');
console.log('');
