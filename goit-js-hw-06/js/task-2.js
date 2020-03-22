import users from "./users.js";
("use strict");

// Получить массив объектов пользователей по цвету глаз
// (поле eyeColor).

// const getUsersWithEyeColor = function(users, color){
//     return users.filter(user => user.eyeColor === color)
// }

//===================================СТРЕЛКА=================================================
const getUsersWithEyeColor = (usersArr, color) =>
  users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue"));

// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
