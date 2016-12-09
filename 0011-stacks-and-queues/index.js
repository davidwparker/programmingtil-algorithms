// Based on CLRS chapter 10.1
var Stack = function() {
  this.top = 0;
  this.vals = [];
};

Stack.prototype.empty = function() {
  return this.top === 0;
};

Stack.prototype.push = function(x) {
  this.top++;
  this.vals[this.top] = x;
};

Stack.prototype.pop = function() {
  if (this.empty()) {
    throw "underflow";
  }
  else {
    this.top--;
    return this.vals[this.top+1];
  }
};

Stack.prototype.values = function() {
  for (var i=0; i<this.vals.length; i++) {
    console.log(i, this.vals[i]);
  }
};

console.log('Stacks');
var stack = new Stack();
console.log(stack.empty());
stack.push(1);
stack.push(3);
stack.push(5);
console.log(stack.empty());
stack.values();
try {
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}
catch (e) {
  console.log(e);
}
console.log('');

// Omitted underflow and overflow checks
var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.vals = [];
};

Queue.prototype.enqueue = function(x) {
  this.vals[this.tail] = x;
  if (this.tail === this.vals.length) {
    this.tail = 1;
  }
  else {
    this.tail++;
  }
};

Queue.prototype.dequeue = function() {
  var x = this.vals[this.head];
  if (this.head === this.vals.length) {
    this.head = 1;
  }
  else {
    this.head++;
  }
  return x;
};

Queue.prototype.values = function() {
  for (var i=0; i<this.vals.length; i++) {
    console.log(i, this.vals[i]);
  }
};


console.log('Queues');
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.values();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log('');

// Of course, in JS, an array can be a stack or a queue by default.
console.log('JS Stack without classes');
var a = [];
a.push(1);
a.push(4);
a.push(6);
a.length;
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());

// Of course, in JS, an array can be a stack or a queue by default.
console.log('JS Queue without classes');
var a = [];
a.push(1);
a.push(6);
a.push(7);
a.length;
console.log(a.shift());
console.log(a.shift());
console.log(a.shift());
console.log(a.shift());
