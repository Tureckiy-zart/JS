"use strict";

// const checkForSpam = function(message) {
//   message = message.toLowerCase();
//   let messageArr = message.split(' ');
//   // console.log(messageArr);
//   // if (message.indexOf("spam", "sale"));

const checkForSpam = message => {
  const aletWords = ["spam", "sale"];
  //создали массив из слов которые дудем проверять в дальнейшем
  const strArray = message.toLowerCase().split(" ");
  //1. привести в нижний регистр 2. разделить по пробелу
  let isSpam;

  for (let i = 0; i < aletWords.length; i++) {
    //перебрали массив
    for (const word in strArray) {
      const includesSpam = strArray[word].includes(aletWords[i]);
      // нашли
      if (includesSpam) {
        // console.log(aletWords[i]);
        return (isSpam = true);
      } else {
        isSpam = false;
      }
    }
  }
  return isSpam;
};
console.log(checkForSpam("Latest technology news:")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр
// message - строку. Функция проверяет ее на содержание слов
// spam и sale. Если нашли зарещенное слово то функция возвращает
// true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// checkForSpam(message)
// 0. принять с троку сделать строку маленькими буквами
// 1. сделать массив из строки
// 2. функцию проверки инклудс
