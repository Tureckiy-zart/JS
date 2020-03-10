"use strict";

// / const salary = {
//     bob: 100,
//     nick: 200,
//     mary: 300
//   };

//   let total = 0;

//   const salaryValues = Object.values(salary);
//   for (const value of salaryValues) {
//     total += value;
//   }
//   ========================================
// const salaryCeys = Object.keys(salary);
// for (const key of salaryCeys) {
//   total += salary[key]; // почему оно работает? salary[key] должен же выдавать имена и не значения
// работает потому что salary[key] мы обращаемся так же к value of key
// }

// console.log(total);

// Напиши функцию countTotalSalary(employees)
// принимающую объект зарплат. Функция считает
// общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет
// вид "имя":"зарплата".

let total = 0;

const countTotalSalary = function(employees) {
  const salaryValues = Object.values(employees);
  console.log(employees);

  for (const value of employees) {
    total += value;
  }
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
