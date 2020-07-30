// http://date.jsontest.com/

import $ from 'jquery';

// function oldDelay(ms, func) {
//     setTimeout(function () {
//         func();
//     }, ms);
// }
//
// oldDelay(3000, function () {
//     console.log('Old delay passed!');
// });

// function delay(ms = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }
//
// delay(4000)
//     .then(() => {
//         console.log('new delay passed!');
//     })
//     .catch(() => {
//         console.info('error');
//     });

let promise = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://d1ate.jsontest.com/',
        dataType: 'json',
        success: function(response) {
            resolve(response);
        },
        error: function(error) {
            reject(error);
        }
    });
});

promise
    .then((data) => {
        return data.date;
    })
    .then((date) => {
        console.log('Date: ', date);
    })
    .catch((error) => {
        console.info('Server error');
    });
