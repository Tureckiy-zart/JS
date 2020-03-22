import users from "./users.js";
("use strict");

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive === true);
};
//===================================СТРЕЛКА=================================================
const getInactiveUsersArrow = users => users.filter(user => !user.isActive);
console.log(getInactiveUsersArrow(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
