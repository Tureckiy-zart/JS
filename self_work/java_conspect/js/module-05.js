"use strict";

// console.log("i'm close");
// const message =
//   'Аукціон ФГВФО з продажу облігацій Державної Іпотечної Установи (серія "С3") відбудеться 13.02.2020';
// // console.table(arr);
// // const newArrSlice = message.slice(6);
// // console.log(newArrSlice);
// // console.log();
// // let res = arr.join(" ")
// // console.log(arr);
// const arr = message.split(" ");
// let clamelCaseExpression = "";

// function getUnderLine(i, length) {
//   return i === arr.length - 1 ? "" : " ";
// }

// for (let i = 0; i < arr.length; i++) {
//   // debugger
//   //   let res = arr[i][0].toLocaleUpperCase() + arr[i].slice(1);
//   //   let res = arr[i][0].toLocaleUpperCase() + arr[i].slice(1) + "_";
//   let res =
//     // arr[i][0].toLocaleUpperCase() + arr[i].slice(1) + (i === arr.length - 1 ? "": "_")
//     arr[i][0].toLocaleUpperCase() +
//     arr[i].slice(1) +
//     getUnderLine(i, arr.length);
//   //   console.log(res);

//   clamelCaseExpression = clamelCaseExpression + res;
//   // console.log(clamelCaseExpression.length);
//   //   console.log(clamelCaseExpression);
// }
// console.log("object: ", clamelCaseExpression.slice(0, 109));


// function sum(a, b) {
//     return console.log('result:', a + b);
// }
// function minus(a, b) {
//     return console.log('result:', a - b);
// }
// function getResult(a, b, callback) {
//     callback(a, b)
// }
// getResult(5, 4, minus)
// const calculator = {
//     result: 0,
//     sum(a, b) {
//         return console.log('result:', a + b);
//     },
//     minus(a, b) {
//         return console.log('result:', a - b);
//     },
//     getResult(a, b, callback) {
//         callback(a, b)
//     }
// }




// const {result: {x}} = calc;
// console.log(x);
// // const calc.result(x);


// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//   };
  
//   // В результате вызова
//   const hotel = new Hotel('Resort Hotel', 5, 100);
//   // Получаем такой объект
//   console.log(hotel);


  const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  /*
   * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
   * Первый элемент это ключ свойства, второй это значение.
   */
  const entries = Object.entries(hotel);
  
  /*
   * На каждой итерации по entries выберем первый элемент подмассива (ключ)
   * в переменную key, а второй (значение) в переменную value
   */
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key}: ${value}`);