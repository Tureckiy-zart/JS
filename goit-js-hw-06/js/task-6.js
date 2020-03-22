import users from "./users.js";
("use strict");
console.log(users);
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) =>
  users.filter(user => (user.age > min && user.age < max));
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
