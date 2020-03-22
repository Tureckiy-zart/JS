import users from "./users.js";
("use strict");
// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

const getUserNames = users => {
  return users.map(users => users.name);
};
console.log(getUserNames(users));
// альтернативныйВариант    ===      Стрелочная функция
const getUserNamesArrow = users => users.map(users => users.name);
console.log(getUserNamesArrow(users));
