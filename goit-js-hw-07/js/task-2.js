("use strict");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию
// в список ul.ingredients. Для создания DOM-узлов
// используй document.createElement().

const ingredientsGet = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  let addLi = document.createElement("li");
  addLi.textContent = ingredient;
  fragment.append(ingredient);
}


// console.log(fragment);

ingredientsGet.append(fragment);
console.log(ingredientsGet);






// ingredients.forEach(function(ingredient) {
//   let addLi = document.createElement("li");
//     addLi.textContent = ingredient;
//     fragment.append(ingredient);
// });