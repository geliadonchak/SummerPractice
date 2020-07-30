// let map = new Map();
// map.set('name', 'WFM');
// map.set('age', 20);
// console.log(map);
//
// console.log(map.get('age'));
//
// let obj1 = {};
// let obj2 = {};
// map.set(obj1, 10);
// map.set(obj2, 20);
// console.log(map.size);
//
// console.log(map.has(obj2));
//
// map.delete('name');
// console.log(map.size);

// let map = new Map([
//     ['name', 'WFM'],
//     ['age', 20]
// ]);
// console.log(map);
//
// for (let value of map.values()) {
//     console.log(value);
// }
// for (let key of map.keys()) {
//     console.log(key);
// }
// for (let enter of map.entries()) {
//     console.log(`${enter[0]} - ${enter[1]}`);
// }

let map = new WeakMap();
let key = {};
map.set(key, 'key');
console.log('Size: ', map.size);
key = null;
console.log('Size: ', map.size);
