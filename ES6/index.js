// const original = function () {
//     return 100;
// };
// console.log(original());

// const arrow = () => {
//     return 150;
// };
// console.log(arrow());

// const arrow2 = (num, num2) => 150 + num *num2;
// console.log(arrow2(50, 4));

const obj = {
    name: 'WFM',

    logName: function () {
        setTimeout(() => {
            console.log('Name: ', this.name);
        }, 2000)
    }
};

obj.logName();