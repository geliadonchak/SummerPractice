// let obj = {
//     name: 'WFM 3',
//     age: 40
// };

// let {name: n, age: a} = obj;
// console.log(n, a);

let array = ['WFM', 30];

//let name = array[0];
//let age = array[1];
//let color = array[2];

let [, , color='red'] = array;

console.log(color);