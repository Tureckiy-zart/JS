("use strict");
// Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item. Получится
// 'В списке 3 категории.'.
//
// (тега h2) и количество элементов в категории (всех
// вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
// =============================================07-01==========================================

const item = document.querySelectorAll(".item");
function lengthCount(toCoutn) {
  return console.log(`В списке ${toCoutn.length} категории`);
}
lengthCount(item);
// =======================================================================================
function getCategory(item) {
  const category = item.forEach(item => {
    const innerContentUl = item.firstElementChild.textContent;
    const allLength = item.querySelector("ul").querySelectorAll("li").length;
    return console.log(
      `Категория ${innerContentUl} содержит ${allLength} элемента`
    );
  });
}
getCategory(item);
// =======================================================================================
