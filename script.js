//1
let celsius = prompt("Введите температуру в Цельсиях");
result = (9/5) * celsius +32; 
alert("Температура " + celsius + "С = " +result +"F");
//2
let admin,
    name;
    name = "Василий";
    admin = name;
    console.log(admin);
//3
let result =  10 + 10 + "10";
console.log(result);
result = "";
result = 10 + "10" + 10;
console.log(result);
result = "";

result = 10 + 10 + +"10"; //конкатенация

result = 10 / -"";  //бесконечное отрицательное число
console.log(result);
result = "";

result = 10 / +"2,5";// не число - NaN
console.log(result);
