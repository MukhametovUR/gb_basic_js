'use strict';


let a = 1, b = 1, c, d;

c = ++a;
alert(c); // ответ: 2 - преинкремент

//пример 2
d = b++; // Постинкремент 1++

alert(d); //ответ: 1

//пример 3

c = 2 + ++a;// К числу прибавляем число с преинкрементом 2 + 3

alert(c); //ответ: 5

//пример 4

d = 2 + b++; //Постинкремент 2 + 2++ = 4

alert(d); //ответ: 4

alert(a); //3 - значение переменной a берется из примера 3  

alert(b); //3 - значение постинкремента при выполнениии выражения d = 2 + b++;