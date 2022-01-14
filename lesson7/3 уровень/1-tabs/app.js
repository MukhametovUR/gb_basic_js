'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let navs = document.querySelectorAll('.nav-link'),
            textEl = document.querySelector('.text');
        
        navs.forEach(nav => {
            nav.addEventListener('click', clickHandler)
        });  

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
 function clickHandler(event) {
    navs.forEach(el => el.classList.remove('active'));
        changeActiveClass(event.target);
        changeText(event);
};   

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
 function changeActiveClass(event) {
    if(event.target.classList !="")
        event.classList.add('active');
};

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
 function changeText(event) { 
    console.log(event.target)
    switch (event.target.textContent) {
        case "Link 1":
            textEl.textContent = texts.text1;
            break;
        case "Link 2":
        textEl.textContent = texts.text2;
            break;
        case "Link 3":
        textEl.textContent = texts.text3;
            break;
    }      
};