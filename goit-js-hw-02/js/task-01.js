"use strict";
// Напиши функцию logItems(array), которая получает массив
// и использует цикл for, который для каждого элемента массива
// будет выводить в консоль сообщение в формате
// [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого
// элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет
// выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
// твой код
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ======================================================/=================

const massList = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const massNum = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function(array) {
  //задали имя массива logItems и array
  //-переменное имя для изменения внутри функции
  for (let i = 0; i < array.length; i += 1) {
    console.table(`Подмассив матрицы №${i + 1}: ${array[i]}`);
  }
};

// ALTERNATIVE
// const logItems = function(array) {
//   for (let item in array) {
//     console.group(`Подмассив матрицы ${Number(item) +1 } - ${array[item]}`);
//   }
// };
logItems(massList); // вызов функции
logItems(massNum);
