import users from "./users.js";
("use strict");

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users
    .reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, [])
    .filter((value, index, user) => user.indexOf(value) === index)
    .sort();
};
console.log(getSortedUniqueSkills(users));