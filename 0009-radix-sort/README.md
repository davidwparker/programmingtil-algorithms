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

Radix Sort

Uses the LSD (Least Significant Digit), so in 329, it would be the number 9.

The algorithm iterates through each digit, starting from the LSD up to the Most,
each time, running the counting sort algorithm on the digits, then putting the
full number into the sorted array.

Takes O(xn) time, where x is the max number of digits, and n is the input array.

## RESOURCES:

* https://github.com/davidwparker/programmingtil-algorithms/tree/master/0009-radix-sort
* https://en.wikipedia.org/wiki/Radix_sort
