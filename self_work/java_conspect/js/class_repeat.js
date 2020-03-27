"use strict";

// const p = {

// foo(x, y){
//     sum = x +y;
//     return sum;
//     console.log(sum);
// }
// }
// foo(1,3)

// const foo = function(a,d){
// console.log(a+d,'Jay', 2+3);
// }
// // foo(1, 3);

// // debugger
// const fooArrow = ()=>console.dir(foo(1,2));
// fooArrow();

// const def = {'host': '2'}
// const opt = { 'user': 'jay' }

// const port = 8080;

// const res = {...opt, port,...def, connett(){}}

// console.log(res);

// === === === === === === === === === === === === === ===

// protopype

// const dog = {
// name: 'Dog',
// voice: 'woof',
// }

// const cat = {
//     name: 'Loki',
//     voice: 'meou',
//     }
// const Animal = {
//   say: function() {
//     console.log(this.name, "say", this.voice);
//   }
// };

// say: () => console.log(this.name, 'goes', this.voice)
// Object.setPrototypeOf(dog, say)
// // console.dir(dog)
// console.log(dog);

// const dog = Object.create(Animal);
// dog.name = "Dog";
// dog.voice = "woof";

// console.dir(dog);
// dog.say();

// function createAnimal(name, voice) {
//   const result = Object.create(Animal);
//   result.name = name;
//   result.voice = voice;
//     return result
// }
// // console.log(createAnimal('cat', 'boo'));
// const cat  = createAnimal('cat', 'boo')
// console.log(cat);

// cat.say()

// const animal = {
//     say: function() {
//       console.log(this.name, "say", this.voice);
//     }
//   };

// Animal.prototype.say = function() {
//   console.log(this.name, "say", this.voice);
// };
// function Animal(name, voice) {
//   this.name = name;
//   this.voice = voice;
// }
// const cat = new Animal("cat", "boo");
// cat.say();


// const obj  = Object.create(null)
// console.log(obj.toString);


// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// console.log(getWage(baseSalary, overtime, rate));

// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//   };
  
//   // В результате вызова
//   const hotel = new Hotel('Resort Hotel', 5, 100);
//   // Получаем такой объект
//   console.log(hotel);


//   const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//   };
  
//   const hotel = new Hotel('Resort Hotel', 5, 100);
//   console.log(hotel);
//   // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}
  
//   const motel = new Hotel('Sunlight Motel', 4, 300);
//   console.log(motel);
//   console.log(hotel.name);


  // const Hotel = function(name, stars, capacity) {
  //   this.name = name;
  //   this.stars = stars;
  //   this.capacity = capacity;
  //   this.guestCount = 0;
  
  //   this.greet = function(guestName) {
  //     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
  //   };
  
  //   this.addGuests = function(amount) {
  //     this.guestCount += amount;
      
  //   };
  
  //   this.removeGuests = function(amount) {
  //     this.guestCount -= amount;
  //   };
  // };
  
  // const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
  // console.log(hotel);
  // // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
  // hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
  // hotel.addGuests(50);
  // hotel.removeGuests(50);




// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   console.log(i + ": " + item + " (массив:" + arr + ")");
// });

// var arr1 = [1, -1, 2, -2, 3];

// var positiveArr = arr1.filter(lol => lol > 0);

// console.log(positiveArr);

// const negativeFilter = arr1.filter(plus => plus < 0);
// console.log(negativeFilter);


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
// const entries = Object.entries(hotel);
// console.log(entries);


/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   // console.log(entry[]);
//   console.log(`${key}: ${value}`);
// }
// const array = [0, 1, 2, 3, 4, 5,6,7,8,9]
// const sum = array.reduce(function(a, b) {
//   return a + b;
// });
// console.log(array.reduce((a, b) => a + b));

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');
// console.log(poly);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter(x => x % 2 === 0);
console.log(even);

const doubled = even.map(x => x * 2);
console.log(doubled);
const reversed = doubled.reverse();

console.log(reversed)