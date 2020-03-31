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
// ============================var1================================================================
{
  const ingredientsGet = document.getElementById("ingredients");

  const fragment = document.createDocumentFragment();

  for (const ingredient of ingredients) {
    let addLi = document.createElement("li");
    addLi.textContent = ingredient;
    fragment.append(ingredient);
  }
  ingredientsGet.append(fragment);
  console.log(ingredientsGet);
}
// ============================var2================================================================
{
  const list2 = document.querySelector("#ingredients");
  const fragment = document.createDocumentFragment();
  function makeList(params) {
    const newLi = ingredients.forEach(item => {
      const addLi = document.createElement("li");
      addLi.textContent = item;
      fragment.append(addLi);
    });
    return list2.append(fragment);
  }
  makeList(ingredients);
}
