"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
user.mood = "Happy";
user.hobby = "Skydiving";
user.premium = false;

const values = Object.keys(user);
for (const elem of values) {
  console.log(`${elem} : ${user[elem]}`);
}