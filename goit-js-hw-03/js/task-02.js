"use strict";

// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function(obj) {
  console.log(Object.keys(obj).length);
  // альтернативный вариант
//   let count = 0;
//   for (let key in obj) {
//     console.log(key);
//     count += 1;
//   }
//   return count;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
