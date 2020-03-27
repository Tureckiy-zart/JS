"use strict";
// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы) и цену
// гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// // алгоритм:
// 1. разобрать фразу по словам ++
// 2. найти длинну массива
// 3. посчитать цену

const calculateEngravingPrice = function(message, pricePerWord) {
  // const words = message.split(" ");
  // const tootalPrice = words.length * pricePerWord;
  // return tootalPrice;
  //ALTERNATIVE
  const calculateEngravingPrice = function(message, pricePerWord) {
    const words = message.split(' ');
    return `цена гравировки: ${words.length* pricePerWord}`
  };
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 60)
); // 120
