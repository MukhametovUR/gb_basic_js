//1
let celsius = prompt("Введите температуру в Цельсиях");
result = (9 / 5) * celsius + 32;
alert("Температура " + celsius + "С = " + result + "F");
//2
let admin,
    name;
name = "Василий";
admin = name;
console.log(admin);
//3
let result1 = 10 + 10 + "10"; // Выполнилась сперва сложение 10+10=20 далее конкатенация 20 и 10 получилось 2010
console.log(result1);//Вывод 2010

let result2 = 10 + "10" + 10;//В первом и во втором действии конкатенация 10 и 10 и 10 получилось 101010
console.log(result2);//Вывод 101010

let result3 = 10 + 10 + +"10"; //Сложение 10+10 и сложение +"10" = 30
console.log(result3);

let result4 = 10 / -"";  //бесконечное отрицательное число
console.log(result4); //Вывод -infinity

let result5 = 10 / +"2,5";// Орифметическая операция над строкой "2,5" - не число
console.log(result5);//Вывод NaN
