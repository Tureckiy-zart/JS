("use strict");

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");

let counter = 0;
function decrFoo() {
  return (span.textContent = counter -= 1);
}
function incrFoo() {
  return (span.textContent = counter += 1);
}

decrement.addEventListener("click", decrFoo);
increment.addEventListener("click", incrFoo);
