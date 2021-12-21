'use strict';


const sum = (a, b) => {
    return a + b;
};

const deduct = (a, b) => {
    return a - b;
};

const multipl = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    return a / b;
};
function mathOperation(arg1, arg2, operation) {
    let op = operation;
    switch (op) {

        case "+":
            console.log(sum(arg1, arg2));
            break;

        case "-":
            console.log(deduct(arg1, arg2));
            break;

        case "*":
            console.log(multipl(arg1, arg2));
            break;

        case "/":
            console.log(div(arg1, arg2));
            break;
    };
};
let str = prompt("Введите операцию +, -, /, * ");

mathOperation(1, 2, str);
