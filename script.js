'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }




// Задача 1
// function buttonClick() {
//     let elem = document.getElementById("elem");
//     elem.outerHTML = "<span>Ку-ку! А я <b>жирный</b>!</span>"
// }

// Задача 2
// function buttonClick() {
//     let elem = document.getElementById("elem");
//     elem.outerHTML = "<h3>Абзац превратился в h3!</h3>"
// }

// Задача 3
// function buttonClick () {
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
// }

// // // Задача 4
// function func() {
//     let num1 = Number(document.getElementsByTagName("input")[0].value);
//     let num2 = Number(document.getElementsByTagName("input")[1].value);
//     let sum;
//     sum == num1 + num2;
//     let answer = document.getElementById('answer');
//     answer.innerHTML = sum;
// }
// function buttonClick() {
//     func();
// }

// Задача 5
// function func() {
//     let elems = document.getElementsByTagName('p');
//     for (let i=0; i<elems.length; i++) {
//     elems[i].innerHTML = i+1;
//     }
// }
// function buttonClick(){
//     func();
// }




