// function logString(num, str) {
//     console.log(num, str);
// }
// logString(20, 'WFM');

// function logString(num) {
//     var args = Array.prototype.slice.call(arguments);
//     console.log(num, args);
// }
// logString(20, 'WFM', 'WFM2', 'WFM3');


function logString(num, ...args) {
    console.log(num, args);
}
// Rest
logString(20, 'WFM', 'WFM2', 'WFM3', 'WFM4');
//Spread
let spreadArray = ['WFM', 'WFM2', 'WFM3', 'WFM4'];
logString(20, ...spreadArray);
