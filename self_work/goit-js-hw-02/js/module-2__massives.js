"use strict";
// Напиши функцию logItems(array), которая получает массив
// и использует цикл for, который для каждого элемента массива
// будет выводить в консоль сообщение в формате
// [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого
// элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет
// выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
// твой код
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ======================================================/=================

// const massList = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const massNum = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// const logItems = function(array) {    //задали имя массива logItems и array -переменное имя для изменения внутри функции
//   for (let i = 0; i < array.length; i += 1) {
//     console.table(`Подмассив матрицы №${i + 1}: ${array[i]}`);
//   }
// };

// ALTERNATIVE
// const logItems = function(array) {
//   for (let item in array) {
//     console.group(`Подмассив матрицы ${Number(item) +1 } - [${array[item]}]`);
//   }
// };

// logItems(massList);    // вызов функции
// logItems(massNum);



// console.log(massList);



// ===============================================================================================

// ===========================================================================

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// // const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]




const namePills = {
  0: {  id: 0, 
        name: "Эвкабал" },
  1: {  id: 1, 
        name: "Флемоксин" },
  2: {  id: 2, 
        name: "Поливитамин" },
  3: {  id: 3, 
        name: "Неофлорумм" }, ////ytttttt
  4: {  id: 4, 
        name: "Синупреет" },
  5: {  id: 5, 
        name: "Мовиназа" }
};

const apply = [
  {
    id: 1,
    antibiotic: true,
    toTakeLength: 7,
    perDay: 2,
    dependsOnFood: false,
    doctor: "pediatr"
  },
  {
    id: 0,
    antibiotic: false,
    toTakeLength: 10,
    perDay: 1, //днём
    dependsOnFood: "днем",
    additional: "очень быстро выпить, запить много воды",
    doctor: "pediatr"
  },
  {
    id: 4,
    antibiotic: false,
    toTakeLength: 14,
    perDay: 1, //днём
    dependsOnFood: "после",
    additional: "запить много воды",
    doctor: "lor"
  },
  {
    id: 2,
    antibiotic: false,
    toTakeLength: 30,
    perDay: 1, //днём
    dependsOnFood: false,
    additional: "витамины",
    doctor: "pediatr"
  },
  {
    id: 5,
    antibiotic: false,
    toTakeLength: 14,
    perDay: 2, //днём
    dependsOnFood: "после",
    additional: "запить много воды",
    doctor: "lor"
  },
  {
    id: 3,
    antibiotic: false,
    toTakeLength: 14,
    perDay: 1, //днём
    dependsOnFood: "после",
    additional: "",
    doctor: "pediatr"
  }
];
const pillsArray = [];
for(let i=0; i < apply.length; i++){
  console.log(apply[i].toTakeLength);
  
  for (let key in apply){
    // console.log('Key: ', key);
  
}
}
// const doList = function(toTake) {
//  const toTakeLength = ;
  // console.log(toTakeLength);
//   const low [{
//     1:aaaaaa,
//     2:bbbbbbb,
//   }]
// console.log();

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
};

  // for (let key in namePills);
  // console.log(id.namePills);
  
  
  
  // console.log(doList);
  
// };



// 1. пройтись по ключам
//  id =2;
// console.log(hotel);
// ЗАДАЧА В КЛАССЕ
// const weapon = [
//   //  1       2            3                       4
//   { id: 1, isReal: true, name: "Machine Gun", damage: 120 },
//   { id: 3, isReal: false, name: "Catomet", damage: 15 },
//   { id: 4, isReal: true, name: "Bow", damage: 60 },
//   { id: 2, isReal: false, name: "Bubble Gun", damage: 5 },
//   { id: 5, isReal: true, name: "Railgun", damage: 70 }
// ];
// const people = {
//   // 1             2         3
//   1: { name: "Ann", age: 12, weapon: 1 },
//   2: { name: "Serg", age: 22, weapon: 2 },
//   3: { name: "Lola", age: 62, weapon: 3 },
//   4: { name: "Rikt", age: 52, weapon: 4 },
//   5: { name: "Mila", age: 2, weapon: 5 },
//   6: { name: "Tor", age: 11, weapon: 4 },
//   7: { name: "Selen", age: 8, weapon: 3 }
// };
// //  Ann is 12 she/he/it is not adult, she/he/it has Machine Gun it is [LEGAL|INLEGAL] damage is 120.
// LIST SORT BY DAMAGE OF WEAPON. INLEGAL SITUATION IS HIGHER ON SORT.
// debugger;
const peopleArray = [];
for (let key in people) {
  //console.log(key, '      ::::      ', people[key]);
  for (let i = 0; i < weapon.length; i++) {
    if (weapon[i].id === people[key].weapon) {
      weapon[i].gunName = weapon[i].name;
      const newPerson = { ...weapon[i], ...people[key] };
      newPerson.isAdault = newPerson.age >= 18;
      newPerson.isLegal = !(!newPerson.isAdault && newPerson.isReal);
      newPerson.sort = newPerson.isLegal
        ? newPerson.damage
        : newPerson.damage * 1000;
      peopleArray.push(newPerson);
      break;
    }
  }
}
//peopleArray.sort((a,b)=>b.sort-a.sort);
let isSort = true;
do {
  isSort = true;
  for (let i = 0; i < peopleArray.length - 1; i++) {
    if (peopleArray[i].sort < peopleArray[i + 1].sort) {
      const tmp = peopleArray[i];
      peopleArray[i] = peopleArray[i + 1];
      peopleArray[i + 1] = tmp;
      isSort = false;
    }
  }
} while (!isSort);
for (let i = 0; i < peopleArray.length; i++) {
  const c = peopleArray[i];
  const m = `${c.name} is ${c.age} she/he/it ${
    c.isAdault ? "adault" : "not adault"
  }, she/he/it has ${c.gunName} it is ${
    c.isLegal ? "LEGAL" : "INLEGAL"
  } damage is ${c.damage}.`;
  console.log(m);
}






// let cost = 0;
// let parameter = 'free';
// if (parameter === 'free'){
//   cost =0;
// } else if (parameter === 'premium') {
//   parameter = 'premium';
//   cost = 100;
// }
// parameter ? 0: 100;     //////предыдуший блок кода записаынй через тернарный поератор
// console.log(cost)
// let parameter = 'free';
//   parameter = prompt("Ваша подписка:");
// switch (parameter){
//     case 'free':
//     cost =0;
//     break;

//     case 'premium':
//     cost = 100;
//     break;

//     case 'pro':
//     cost = 500;
//     break;

//     default: "хуй вам"
//   }
//   console.log(cost);

// Цикл while
// let s = 0;
// let a = 1;
// const b = 1;
// let c = a + b + s;
// // debugger
// while (s < 8) {
//   s += 1;
// }
// console.log(a);
// console.log(s);

// const clientCounter = 18;
// const maxClients = 25;
// let clientDifference=0;
// // while (maxClients >= clientCounter) {
//   // clientDifference += 1;
// // }
// console.log(clientDifference);


// let clientCounter = 18;
// const maxClients = 25;


// do (
//   clientCounter += 1;
//   ) while (clientCounter < maxClients)
//   console.log(clientCounter);



// "use strict";
// const min = 10;
// const max = 30;
// const value = 15;

// const isInRange = value < 10 || value > 30;

// if (isInRange) {
//   console.log("wwwooooooooowwww");
// } else {
//   console.log("number is not in range");
// }

// console.log(isInRange);
// console.log(typeof isInRange);

// console.log(0 || 4);
// console.log( 0 || NaN || 0 || 5);





// const products = ["appl", "msc", "asus", "toshiba", 1, 2];
// products[999] = 15;
// console.log(products[2]);
// console.log(products[200]);
// console.log(products.length);
// console.log(products);

// const board = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(board[0][2]);

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = a + b;
// console.log(a.length);
// console.log(a !== b);

// console.log(a + " " + b);
// console.log(c);
// for (let i = 1; i > a.length; i++);
// a[5] = 6;
// console.log(a.length);

// let message = "Uncaught TypeError:Cannot read property of undefined".toLowerCase();
// message = message;
// console.log(message);
// console.log(message);

// const wordsMassive = message.split(":");
// console.log(wordsMassive);
// const split2 = wordsMassive[1].split(" ");
// console.log(split2);
// const words_Massive = split2.join("_");
// console.log(words_Massive);

// let messageErr = "Uncaught_TypeError___Cannot__read___property__of undefined";
// const inputCorrectoin = function(messageErr) {
// const messageErrSplit1 = message.slpit(' ')
// const messageErrSplit1 = message.split(" ");
// console.log(messageErrSplit1);

// let messageErrSplit = message.split("");
// console.log(messageErrSplit);
// console.log(messageErrSplit.length);

// let messageErrJoin = messageErrSplit.join("__");
// console.log(messageErrJoin[18], "#18");

// const messageErrLength = messageErr.Length();
// console.log(messageErrLength);
// };
// console.log(messageErr);

// const indexOffCannot = message.indexOf("error");
// console.log(indexOffCannot);
// const lncludesCannot = message.includes("cannot");
// console.log(lncludesCannot);

// const names = ["Cannot", "read", "property", 'undefined'];

// const consolLogo = names.includes("read");

// console.log(consolLogo);
// if(!consolLogo){
//   console.log("НЕ СОВПАДАЕТ! ВАМ ПОВЕЗЛО! ВЫ НЕ СОСТОИТЕ В РОЗЫСКЕ");
// } else(console.log( "ВЫ ПИДОР!"))

// names.push(4, 5, 7);
// console.log(names);
// names.pop();
// console.log(names);
// names.shift(1);
// console.log(names);
// const copy = names.slice(1, 3); //корирует массив
// console.log(copy);

// const cards = [];
// cards.push("zx-1", "zx-2", "zx-3", "zx-4");
// console.log(cards);
// console.log(cards[0]);

// cards.splice(0,2)
// console.log(cards);
// cards.splice(0,1, 'card-5', 'card-6')
// console.log(cards);

// const cards = ["Cannot", "read", "property", "undefined"];
// // console.log(cards.length);
// const index = cards.indexOf("property");
// const card = cards.splice(index)[0];
// cards.splice(0, 0, card);
// const cardsPlus = cards.splice(1, 0, card, index, index);

// // console.log(typeof index);
// // console.log("Index:", index);
// // console.log("modified", cards);
// console.log(cardsPlus);

// cards.splise(0, 0, card);

// if (index === -1)
// {
// console.log("Совпадений нет");
// } else {
// console.log(`Искомое солово: №${index}`);

// ;}
// debugger
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const message = "4sdfsfd444 1 555sdfsdfsdf55 33sdf3 22";
// const words = message.split(" ");
// const max = words.length-1;
// const leftCount = 2;
// const rightCount = 6;
// let target;
// // console.log(max);

// for (let i = 0; i < max; i += 1) {
//   console.log(words[i+1]);
//   // console.log(i);
//   // const min = words[i - 1];
//   // const prevElementLength = words[i - 1].length;
//   const prevElementLength = words[i - 1].length;
//   const nextElementLength = words[i + 1].length;
//   if (prevElementLength === leftCount && nextElementLength === rightCount) {
//     target = words[i];
//   }
// }
// console.log(words);
// console.log(target);

// for (const word of words){
// if (word[0].length<word[1].length)

// }

// const add = function(){
//   console.log(arguments);
//  let total =0;

//   for(let i = 0; i <arguments.length; i+=1){
//     total +=arguments[i];
//   }
//   return total;
// }

// console.log(add(1,2,3,4));
// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3,4,5,6,7));

// const add = function(){
//   console.log(arguments);
//   const mult = arguments[0];
//   let total =0;

//   for(let i = 1; i <arguments.length; i+=1){
//     //не оч красиво начинать чсётчик с "1".
//     // поэтому стоит сделать из превдомассива - массив
//     total +=arguments[i];

//   }
//   return mult * total;
// }

// console.log(add(5, 1,2,3,4));
// console.log(add(10, 1,2,3,4,5));
// console.log(add(15, 1,2,3,4,5,6,7,8,9));

// const add = function() {
//   // console.log(arguments);
//   let args = Array.from(arguments);

//   const mult = args[0];

//   args = args.slice(1);

//   let total = 0;

// args.shift();
// console.log(arguments);
// console.log(args);
// console.log(mult);
// console.log(args);
// console.log(mult);

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return mult * total;
// };

// console.log(add(5, 1, 2, 3, 4));
// console.log(add(10, 1, 2, 3, 4, 5));
// console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// Создание массива из асевдомассива через (... rest)
// const autoArray = function(...array){     // -собирает ВСЕ аргументы в массив
//   console.log('args: ', array);

//   const mult = array[0];
//   console.log(mult);
//   array = array.slice(1);
//   console.log(array[0]);
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//         total += array[i];
//       }
//       return mult * total;
//     };

// console.log(autoArray(5, 1, 2, 3, 4));
// console.log(autoArray(10, 1, 2, 3, 4, 5));
// console.log(autoArray(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// const add = function(mult, ...arrgs) {
//   // -собирает пенрвый аргумент в массив mult,
//   // а остальныев аргументы в массив array
//   let total = 0;
//   for (let i = 0; i < arrgs.length; i += 1) {
//     total += arrgs[i];
//   }
//   return mult * total;
// };

// console.log(add(5, 1, 2, 3, 4));
// console.log(add(10, 1, 2, 3, 4, 5));
// console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//Все данные передаем как аргументы 
// не используем глобальные переменные