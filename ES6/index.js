// const c = 90;
const c2 = () => 200;

const func = (a = 20, b = a + c2()) => {
    return a + b;
};

console.log(func(30));