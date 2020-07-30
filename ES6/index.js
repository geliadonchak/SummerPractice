// function* gen() {
//     yield 11;
//     yield 22;
//     yield 33;
// }
//
// let iter = gen();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* g1() {
//     yield 1;
//     yield* g2();
//     yield 4;
// }
// function* g2() {
//     yield 2;
//     yield 3;
// }
//
// let iter = g1();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* g() {
//     yield* [1, 2, 3];
// }
// let iter = g();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* getRange(start = 0, end = 100, step = 10) {
//     while (start < end) {
//         yield start;
//         start += step;
//     }
// }
// for (let n of getRange(10, 50)) {
//     console.log(n);
// }

// let fib = {
//     *[Symbol.iterator]() {
//         let cur = 1, pre = 0;
//         for (;;) {
//             [cur, pre] = [cur + pre, cur];
//             yield cur;
//         }
//     }
// };
//
//
// for (let n of fib) {
//     if (n > 3000) break;
//     console.log(n);
// }
