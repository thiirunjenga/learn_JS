
//calculator using if statement

const calculator1 = (num1, num2, operator) => {

   if (operator == '+') {
    return num1 + num2;
   } else if (operator == '-'){
    return num1 - num2;
   } else if (operator == '*') {
    return num1 * num2;
   }else if (operator == '/') {
    return num1 / num2;
   }else {
    return 'error';
}

}

console.log(calculator1(5, 6, '-'));




// calculator using switch statement

const calculator2 = (num1, num2, operator) => {
    switch (operator) {
        case operator == '+': return num1 + num2
            break;
        case operator == '/': return num1 / num2
            break; 
        case operator == '-': return num1 - num2
            break; 
        case operator == '*': return num1 * num2
            break;      
        default:
            return 'error'
            break;
    }
};


console.log(calculator2(5, 9, '9'));


