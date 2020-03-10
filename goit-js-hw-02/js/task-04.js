"use strict";
// Напиши функцию formatString(string) которая принимает строку и
// форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает
// ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до
// 40-ка символов и добавляет в конец строки троеточие '...', после
// чего возвращает укороченную версию.

// 1. посчитать длинну строки
// 2. сравнить. если меньше 40 символов - то просто вывести на экран
//     если больше 40 симв, то обрезать дo 40
// 3. ретёрн функции

// =========================================================================
// const formatString = string => {
//   let stringLength = string.length;

//   if (stringLength < 40) {
//   } else {
//     let stringArr = Array.from(string); //прелбразовать в псевдомассив
//     // console.log(stringArr);
//     string = stringArr.splice(0, 40); // удалить первые 40 символов
//     string = string.join("");
//   }
//   return string;
// };

const formatString = string => {
  let stringLength = string.length;

  if (stringLength < 40) {
  } else {
    const stringArr = function(...string) {
      string = stringArr.splice(0, 40); // удалить первые 40 символов
      string = string.join("");
    }; //преoбразовать в псевдомассив
    // console.log(stringArr);
  }
  return string;
};
/*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка                       ++++++++++++++++++++++++++

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // // вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// // // вернется оригинальная строка         +++++

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
console.log(
  formatString(
    "ХУЙ__ХУЙ!!!! Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// // вернется форматированная строка
