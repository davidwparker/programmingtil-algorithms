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

Quicksort

Like merge sort, uses divide and conquer paradigm.

Divide: Partition array A[p..r] into two subarrays A[p..q-1] and A[q+1..r] such
that each element of A[p..q-1] is <= A[q], which in turn is <= each element in
A[q+1..r]. Compute index q as part of this partitioning.

Conquer: sort the two subarrays A[p..q-1] and A[q+1..r] by recursion.

Combine: because subarrays are already sorted, no work is needed.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-algorithms/tree/master/0006-quicksort
* https://en.wikipedia.org/wiki/Quicksort
* http://algo-visualizer.jasonpark.me/#path=scratch/f80e50392a31850ad8ef7a10c3474806
