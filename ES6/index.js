// let set = new Set();
// set.add(10);
// set.add('Hi');
// console.log(set.size);
// set.add(10);
// console.log(set.size);

// let set = new Set([1, 2, 3, 4, 4, 3, 5, 2, 7]);
// console.log(set.size);
// console.log(set.has(7));
// set.delete(3);
// console.log(set.size);
// set.clear(5);
// console.log(set.size);

let set = new WeakSet();

let key = {};
set.add(key);
console.log(set.size);
key = null;
console.log(set.size);
