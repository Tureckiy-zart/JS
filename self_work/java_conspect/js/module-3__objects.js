// "use strict";

//========================================
// const product = {
//   name: "apple",
//   prise: 100,
//   prop: "red",
//   description: "sdfsdfsdfdf"
// };
// const key = "description";
// console.log(product.prise);
// console.log(product["name"]);
// console.log(product[key]);

// product.prise = 200;
// console.log(product.prise);

// const target = {
//   name: "name-01",
//   value: "value-01"
// };

// const fromData = {
//   [target.name]: target.value
// };
// console.log(fromData);
//========================================
// const storege = {
//   items: [
//     { id: "id-1", name: "name-01", price: 30 },
//     { id: "id-2", name: "name-02", price: 40 }
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       console.log(this.items[i]);
//       if(product.id === id){
//         console.log('Object Includes');
//         console.log('i :', i);
//         this.items.splice(i, 1)
//       }
//     }
//   }
// };

// console.table(storege.getItems());

// storege.addProduct({ id: "id-added", name: "name-added", price: 30 });
// console.table(storege.getItems());
// storege.removeProduct('id-2');
// console.table(storege.getItems());
// // console.log(removeProduct("id-2"));

//========================================

// const product = {
//   name: "bread",
//   price: 100,
//   quantity: 20
// };
//for in лучше не испоользовать впринцепе. он медленный и плохо работает
// for (const key in product) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// const keys = Object.keys(product);
// const values = Object.values(product);

// for (const key of values) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// for (const value of values) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }
// console.log(keys);
// console.log(values);

// const salary = {
//   bob: 100,
//   nick: 200,
//   mary: 300
// };

// let total = 0;

// const salaryValues = Object.values(salary);
// for (const value of salaryValues) {
//   total += value;
// }
//========================================
// const salaryCeys = Object.keys(salary);
// for (const key of salaryCeys) {
//   total += salary[key]; // почему оно работает? salary[key] должен же выдавать имена и не значения
// работает потому что salary[key] мы обращаемся так же к value of key
// }

// console.log(total);
//========================================
// 1.17 готовое решение

// Задание 5
//  * * *Напиши функцию getAllPropValues(arr, prop),         * * *
//  * * *которая получает массив объектов и имя              * * *
//  * * *свойства. Возвращает массив значений определенного  * * *
//  * * * свойства prop из каждого объекта в массиве.        * * *

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(products, key) {
//   const values = [];
//   //   console.log(values);
//   for (const product of products) {
//     values.push(product[key]);
//     // console.log();
//     console.log(product);
//   }
//   //   console.log(products[2]);
//   console.log(values);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// // console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// // console.log(getAllPropValues(products, 'category')); // []

// const object = {
//   name: "Jay",
//   age: 35,
//   lang: "ru",
//   national: "ua",
//   changeAge(newAge){
//     //   console.log(this);
//     //   console.log(newAge);
//       this.age = newAge;
//   }
// };
// object.changeAge(100);

// console.log(object.age);
// // (object.age = 30), console.log(object.age);

// const key = "name";
// const value = 10;

// const obj = {
//     a: 1,
//     [key]: value,
// };
// console.log(obj);

// const object = {
//   worhers: [
//     {
//       name: "Jay",
//       age: 35,
//       lang: "ru",
//       national: "ua",
//       changeAge(newAge) {
//         this.age = newAge;
//       }
//     },
//     { name: "Fant", age: 35, lang: "slov", national: "ua" }
//   ],
//   getWorker() {
//     return this.workers;
//   },
//   addChar(Char) {
//     this.worhers.push(Char);
//   },

//   removeProduct(national) {
//     for (let i = 0; i < this.workers.length; i += 1) {
//       const  worker = this.workers[i];
//       // console.log(this.workers[i]);
//       // console.log(worher);

//       if (worker.name === name) {
//         console.log('i:', i);
//         console.log(worker);
//         console.log("!!!!!!");
//       }
//     }
//   }
// };

// // addChar(addWorker){
// //     console.log(addWorker);

// //     this.workers.push(addWorker);
// // }
// // };

// object.addChar({name: "Lol", age: 78, lang: "en", national: "usa"});
// console.log(object.addChar);

// console.table(object.getWorker());
// console.table(getWorker());
// Напиши функцию logItems(array),
// которая получает массив и использует
// цикл for, который для каждого элемента
// массива будет выводить в консоль
// сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого
// элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0
// будет выведено '1 - Mango', а
// для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   for(let i=0; i<array.length; i+=1){
//     // console.log(`${i+1}: ${array[i]}`);
//   }
//   for (let item of array){
//     console.log(item);
//   }
// for(let item in array){
//   console.log(item.length);

// }

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// // logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const numbers = [];

// for(let i=0; i<5; i +=1){
//   numbers.push(`Number:${i +1}`)
//   const number = numbers[i];
//   if (number === 'Number:2'){
//     console.log(`'ALRET!!!', ${number}`);
//     number = 'NON!!!!'
//     console.log(number);

//   }
// }

// console.table('numbers: ', numbers);

// const string = " asdasd kasd;kj saaa";
// for(let car of string){
//   console.log(car);
//   string.push('1');

// }

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//   const words = message.split(' ');
//   return `цена гравировки: ${words.length* pricePerWord}`
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// Напиши фукцнию findLongestWord(string), которая принимает параметром
// роизвольную строку (в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

// const findLongestWord = function(string) {
// const words = string.split(' ')
// let longestWord = words[0];

// for(let word of words){
//   if (longestWord.length < word.length){
//     longestWord = word;
//     console.log(longestWord.length);

//   }
//   }
//     return longestWord
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a rosssll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// Напиши функцию formatString(string) которая
// принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов,
// функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция
// обрезает строку до 40-ка символов и
// добавляет в конец строки троеточие '...',
// после чего возвращает укороченную версию.

// const formatString = function(string) {
//   if (string.length>40){
//   let newString = string.slice(0, 40);
//   return  newString;
//   } else{
//     return string;
//   }
// };

// const math = Math.random();
// console.log(math);

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка.

// "use strict";

// let x  = function (){
//   console.log('current context ', this);
//   console.log(window.innerWidth);

// }

// console.dir(window);

// const counter = function(n = 0) {
//   let count = n;

//   return function(step = 1) {
//     count += step;
//     return console.log("count", count);
//   };
// };
// const counter1 = counter(50);
// debugger;

// counter1(50);
// counter1(2);
// counter1(2);
// counter1(2);
// console.log("================");

// const counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();
// console.log("================");

// const counter3 = counter();
// counter3(2);
// counter3(2);
// counter3(2);
// counter3(2);

// // Напиши функцию checkForSpam(message), принимающую 1 параметр
// // message - строку. Функция проверяет ее на содержание слов spam и sale.
// // Если нашли зарещенное слово то функция возвращает true, если запрещенных
// // слов нет функция возвращает false. Слова в строке могут быть в
// // произвольном регистре.

// const checkForSpam = function(message) {
//     const words = message.toLowerCase().split(' ');
//     // console.log(words);
//    const alertWords = ['spam', 'sale'];

//   for(let word of words){
//     const includesSpam = strArray[word].includes(aletWords[i]);
//                 console.log(includesSpam);

//     if(word === 'spam' || word === 'sale'){

//     // console.log(word);
//     //   console.log('ALERT');

//     }

//   }

// // };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// const object= {
//   name: 'Jay',
//   lang: "ru",
//   gender: "male",
//   age: 35,
// }
// const {name, lang,gender, age} = object;
// // const {} = object;
// console.log(object);
// console.log(name, lang, age);
// console.log(gender, age);
// object.name = "Jay55";
// const obj = Object.values(object);
// console.log(`${obj[3]} + ${obj[2]}`);

// console.log(object);

// const object2 = [
//   {
//     name: "Jay",
//     lang: "ru",
//     gender: "male",
//     age: 35
//   }
// ];
// const obj3 = object2[0];
// console.log(obj3);

// const { name, gender, status = "empty" } = obj3;
// console.log(name + " " + gender + " " + status);

// const mass = ['jay', 'ru', 'male', 35];
// const [name, lang, gend, Age] = mass;

// console.log(mass);

// let name, lang, gender;
// [name, lang, gender] = mass;
// console.log(`Name: ${name}, lang: ${lang}, age:${Age}`);
// const {age}

// console.log(name);

// // const { name, lang, ...rest } = object2;
// console.log('name   5   ' + "rest" + " " + "lang");

// console.table(rest);

// 'JavaScript is awesome'.length;
// console.log('JavaScript is awesome'.length);

// const mas = "Метод это вызов действия, например присесть или плавать";
// // mas.toUpperCace();
// console.log(mas);

// console.log("Метод это вызов действия, например [присесть] или [плавать]".toUpperCase());

// let nwame;

/*
 * Переменная name объявлена, но не инициализирована, поэтому
 * ее значение undefined (не определено), тогда как переменная age
 * не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError
 */
// console.log(name); // undefined
// console.log(age);

// let i = 0;
// while (i < 5) {
//     // console.log("counter: ", i);
//     i += 1;
//     console.log("counter: ", i);

// }
// console.log(i);

// let clientCounter = 18;
// const maxClients = 25;

// // console.log(clientCounter);
// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
//   console.log(clientCounter);
// }

// const target = 4;
// let sum = 0;

// for (let i = 0; i < target; i += 1) {
//   sum += i;
// }
// console.log(sum);
// ++==
// const x = 0 + 1 + 2 + 3;
// console.log(x);
// let c;
// const max = 10;
// for (let i = 0; i <= max; i += 1) {
//     // console.log(`${max} : ${i}`, max % i);
//   if (i % 2 === 0) {
//       c = i;
//       continue;
//     }
//     console.log("Нечетное i: ", i);
// }

// // console.log(c);

// const clients  = ['Mango', 'Poly', 'Ajax'];
// clients [2] = 'ANN===NNA'
// // console.log(clients );
// // console.log(clients [2]);

// const clientsLength = clients.length;

// console.log(clientsLength);
// function fun(naxme1){
//     if(clientsLength<5){
//         naxme1 = 'IIIIGOOOORRRR'
//         console.log(naxme1);
//     }
//     console.log(clients);
//     clients[0]= naxme1;
// }
// fun(fun)

// console.log(clients);

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients)

// for (let i = 0; i < clients.length; i += 1) {
//     clients[i] = clients[i]+ ' ' + clients[i-1];
//   console.log('Logging clients: ', clients[i]);
// }

// for (const client of clients) {
//     console.log(client);
//   }

//   // Итерация по строке
//   const string = 'javascript';

//   for (const character of string) {
//     console.log(character);
//   }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientToFind = "Poly";
// let message;

// for (const client of clients) {
//   if (client === clientToFind) {
//     message = "Клиент найден";
//     // console.log(`Клиент: ${client} /find`);
//     break;
// }
// message = 'Клиента нет в базе'
// }
// console.log(typeof clients);

// console.log(message);

// ========================================================
// ========================================================

// for( const client of clients){
//     console.log(client);

// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// const min = Number.min(numbers);
// console.log(min);
("use strict");

// function f(n) {
//   g(n - 1);
// }

// function g(n) {
//   console.log("до: " + n);
//   if (n > 0) {
//     f(n);
//   }
//   // console.log(n);

//   console.log("после: " + n);
// }

// f(2);

// Вывод

// до: 1
// до: 0
// после: 0
// после: 1

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let total = 0;
// const matrixLength = matrix.length;
// // console.log(matrixLength);

// for (let i = 0; i < matrixLength; i += 1) {
// // console.log(matrix[i]);

//   for (let j = 0; j < 1; j += 1) {
//     //   console.log(matrix [i][1]);
//       console.log(matrix [0][2]);
//     //   console.log(matrix [i][0]);

//     // console.log(matrix[i] matrix[i][j]);
//   }
// }

// let a = 2;
// let b = a;
// if ((b = a)) {
//     a = 2*b;

// }
// console.log(a);

// const functionArray =[
//     fn(name),
//     fn(count),
// ]
// functionArray[1]()   // получить элемент с индексом 1 (функция) и выполнить её
// console.log(a===b);
// a = 15;
// console.log(a===b);
// console.log(b);
// console.log(a===b);
// let c = b;
// console.log(c = a);

// let matrix = [
//   [1, 2, "tc"]
// [4, 5, 6],
// [7, 8, 9]
// ];

//   console.log(matrix[0], matrix[1][1], matrix[2] );

//   console.log(matrix.toString());
//   console.log( typeof matrix.toString());

//   let arr = [item1, item2...];

//   let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(shoppingCart);
// console.log(fruits);

// const styles = [ 'Джаз', 'Блюз'];

// styles.push('Рок-н-ролл')
// styles.shift('Джаз')
// console.log(styles);
// styles.unshift('Рэп' ,'sasd' ,'Регги','Регги','Регги','Регги','Регги','Регги','Регги','Регги')
// styles[Math.floor((styles.length-1)/2)]='Classic';
// console.log(styles);

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();

// const sumInput = function(){
//     let userInputSave = [];
//     let userInput = prompt('ввести значения:')
//     if(userInput){
//         userInputSave.push(userInput);
//     }
//     console.log(userInputSave);

// }

// sumInput();
// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     number = Number(number)
//     sum += number;
//   }
//   return sum;
//   console.log(numbers);
// }
// alert(sumInput());
// let total = 0;
// const sum = function(...arrgs) {
//   for (let i of arrgs) {
//     total += i;
//   }
//   console.log(total);
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8);

// console.log(total);

// const name ='Resort Hotel';

// const hotel = {
//   name,
//   stars: 5,
//   capacity: 100,
// };

// hotel.name = "Long"
// console.log(hotel.name);

// hotel.adres = "Long street"
// console.log(hotel);

// const prise = 200;
// name = "LeongName"
// const getKey = function(){
//       return 'age';
// }

// const hotel = {
//   [prise]: 'SuperPrice',
//   name,
//   stars: 5,
//   capacity: 100,
//   [getKey()] : 5-5555555,
// };
// console.log(hotel);

// const makeNoise = function() {
//   console.log("Хрясь!");
// };

// makeNoise();

// // console.log(hotel);

// var power = function(base, exponent) {
//   var result = 1;
//   for (var count = 0; count < exponent; count++) result *= base;
//   return result;
// };
// console.log(power(5, 3));

// console.log(power(2, 10));
// → 1024

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   guests: ["mango", "poly", "ajax", "lol", 'spam']
// };
// const guests = hotel.guests;
// // console.log(guests);

// for (let guest of guests) {
//   // console.log(guest);
//   const x = "lol";
//   if (guest === x) {
//     console.log(x);
//   }
// }

// var landscape = function() {
//   var result = "";
//   var flat = function(size) {
//     for (var count = 0; count < size; count++)
//       result += "_";
//   };
//   var mountain = function(size) {
//     result += "/";
//     for (var count = 0; count < size; count++)
//       result += "'";
//     result += "\\";
//   };

//   flat(3);
//   mountain(4);
//   flat(6);
//   mountain(1);
//   flat(1);
//   return result;
// };console.log(landscape());

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100
// };

// const mass = ['Ann', 'Dima', 'Fant', 'Jay'];
// const msssNumbers = [ 3,2,3,4,5];

// let random = Math.random();
// random = Math.round(random); // min(...msssNumbers);
// console.log(random);
// for(let i=0; i<10; i +=1){
//   let zero1 = 0;
//   let one = 0;
//   if(random = 0 ){
//     zero1 +=1
//   }else {
//   one +=1;
// }

// console.log(zero1);
// // console.log(one);

// }

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const plusMass = [...firstBatch, ...secondBatch]
// console.log(plusMass);

// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name: Boris , stars = 3, status = 'empty' } = hotel;

// console.log(Boris); // "Resort Hotel", 5, "empty"
// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// // console.log(entries);

// for (const entry of entries) {
//   // console.log(entry);

//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);
function first() {
  setTimeout(function() {
    console.log(1);
  }, 50);
}
function second() {
  console.log(2);
}

first();
second();


