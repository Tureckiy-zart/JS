import users from "./users.js";
("use strict");
const getUsersWithGender = (users, genббder) =>
  users.filter(user => user.gender === genббder);
console.log(getUsersWithGender(users, "male"));
