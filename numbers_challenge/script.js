let x = new Number;
let y = new Number;

x = Math.floor(Math.random() * (100 - 1)) + 1;
y = Math.floor(Math.random() * (50 - 1)) + 1;

let sumOutput = x + y;
let productOutput = x * y;
let differenceOutput = x - y;
let quotientOutput = x / y;
let remainderOutput = x % y;


console.log(x);
console.log(y);

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${remainderOutput}`);

