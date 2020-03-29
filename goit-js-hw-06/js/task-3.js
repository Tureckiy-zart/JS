import users from "./users.js";
("use strict");


const getUsersWithGender = (users, genббder) => users.filter(user => user.gender === genббder).map(user => user.name); 
console.log(getUsersWithGender(users, "male"));//[ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
