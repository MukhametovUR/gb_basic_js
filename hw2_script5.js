'use strict';

function mathOperation(arg1, arg2, operation){
    let op = operation;
    switch(op){
    case "+":{
        const sum = (a,b) =>{
                return a + b;
            };
        console.log(sum(arg1, arg2));
        break;
        };
    case "-":{
        const raznost = (a,b) =>{
                return a - b;
            };
            console.log(raznost(arg1, arg2));
            break;
        };       

    case "*":{
        const proizv = (a,b) =>{
                return a * b;
            };
            console.log(proizv(arg1, arg2));
            break;
        };
    case "/":{
        const delenie = (a,b) =>{
                return a / b;
            };
            console.log(delenie(arg1, arg2));
            break;
        };           
    };
};
let str = prompt("Введите операцию +, -, /, * ");

mathOperation(1,2,str);
