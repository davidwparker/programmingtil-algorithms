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

Priority Queue (PQ)

A data structure for maintaining a set S of elements, each with an associated value called a key (or "priority").

A (max) priority queue supports the following operations:
* Insert(S, x) inserts the element into the set S, which is equivalent to the operation S = S union {x}
* Maximum(S) returns the element of S with the largest key.
* ExtractMax(S) removes and returns the element of S with the largest key.
* IncreaseKey(S,x,k) increases the value of element x's key to the new value k, which is assumed to be at least as large as x's current key value.

Often used in scheduling.

Many data structures can be used to implement a PQ, though often a heap is used.



RESOURCES:
* https://github.com/davidwparker/programmingtil-algorithms/tree/master/0005-priority-queue
* https://en.wikipedia.org/wiki/PriorityQueue
