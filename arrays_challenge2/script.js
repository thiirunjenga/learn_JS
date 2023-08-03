const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

arr1.pop();
let newArr = [...arr1, ...arr2];



console.log(newArr);