const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

//first option
arr1.pop();    //remove element on last index


//second option
//arr2.shift();  //remove element on first index
let newArr = [...arr1, ...arr2];



console.log(newArr);