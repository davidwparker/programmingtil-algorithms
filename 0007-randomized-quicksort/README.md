## STARTING OFF:

Optional: Make sure you have npm installed.
Or just have node installed.

Run:
```
npm start
```

or
```
node index.js
```

View in console.

## CONCEPTS:

Randomized Quicksort

The main difference here is that we use random sampling to randomly chose an element
from the subarray A[p..r]. We do so by first exchanging A[r] with an element chosen
at random from A[p..r]. By randomly sampling, we ensure that the pivot element
x = A[r] is equally likely to be any of the r-p+1 elements in the subarray.

Because of the randomly chosen pivot element, we expect the split of the input
array to be reasonably well balanced on average.

Expected running time quicksort using randomized partition should be O(n lg n).

## RESOURCES:

* https://github.com/davidwparker/programmingtil-algorithms/tree/master/0007-randomized-quicksort
* https://en.wikipedia.org/wiki/Quicksort
