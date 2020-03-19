import users from './users.js';
'use strict';
// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

const getUserNames = users => {
  return users.map(users => users.name)
};
console.log(getUserNames(users));

// альтернативныйВариант    ===      Стрелочная функция
const getUserNamesArrow = users => users.map(users => users.name)
console.log(getUserNamesArrow(users));














// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   console.log(i + ": " + item + " (массив:" + arr + ")");
// });

// var arr1 = [1, -1, 2, -2, 3];

// var positiveArr = arr1.filter(lol => lol > 0);

// console.log(positiveArr);

// const negativeFilter = arr1.filter(plus => plus < 0);
// console.log(negativeFilter);

