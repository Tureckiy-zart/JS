"use strict";

// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

// 1.  Подчсёт кол-ва слов;
// 2.  приянять за условие, что самое первое слово и енсть длинное по умолчанию;
// 3.  сравгнить длинны первого слова и всех остальных и если найдено слово которое
//     длиннее то записать его в переменную и остановить цикл
// 4.  вывод самого длинного слова;

const findLongestWord = string => {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    console.log("word.length: ",word.length,"longestWord:",longestWord.length);
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
