("use strict");
// Посчитает и выведет в консоль количество категорий 
                                      // в ul#categories, то есть элементов li.item. Получится 
                                      // 'В списке 3 категории.'.
//
// (тега h2) и количество элементов в категории (всех 
//   вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
// const mainList = document.getElementById('categories')
// const arrLi = mainList.querySelectorAll('.item')

const list = [...document.querySelectorAll('.item')]
console.log(`В списке ${list.length} категории`);

//  Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента 

// console.dir(arrLi[0]);



