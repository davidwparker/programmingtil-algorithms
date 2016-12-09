// Based on CLRS chapter 10.2
// Doubly linked list.
// Can also be circular, sorted, singly.
var LinkedList = function() {};

// O(n)
LinkedList.prototype.search = function(k) {
  var x = this.head;
  while (x !== undefined && x.key !== k) {
    x = x.next;
  }
  return x;
};

// O(1)
LinkedList.prototype.insert = function(x) {
  x.next = this.head;
  if (this.head !== undefined) {
    this.head.prev = x;
  }
  this.head = x;
  x.prev = undefined;
};

// O(1), unless searching for a key, then O(n)
LinkedList.prototype.delete = function(x) {
  if (x.prev !== undefined) {
    x.prev.next = x.next;
  }
  else {
    this.head = x.next;
  }
  if (x.next !== undefined) {
    x.next.prev = x.prev;
  }
};

LinkedList.prototype.values = function() {
  var x = this.head;
  while (x !== undefined) {
    console.log(x.key, x);
    x = x.next;
  }
};

console.log('Linked List');
var list = new LinkedList();
list.insert({key:'a'});
list.insert({key:'b'});
list.insert({key:'c'});
list.insert({key:'d'});
console.log("=====Inserted Values=====");
list.values();
console.log('');

// console.log("=====Searching=====");
// var c = list.search('c');
// console.log(c);
// var b = list.search('b');
// console.log(b);
// var d = list.search('d');
// console.log(d);
// var a = list.search('a');
// console.log(a);
// console.log('');
//
// console.log("=====Deleted 'c'=====");
// list.delete(c);
// list.values();

console.log('');
