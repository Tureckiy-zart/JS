"use strict";
// let array = [ 'andrey' , 'nikita' ,'vasya', 'sergey']

// arrli = document.querySelectorAll('#list li');

// for(const item of arrli){
//     item.addEventListener('click', () =>{
//     item.remove(this);
// })
// }

// document.querySelector('#list').addEventListener('mouseover', (e) => {
//     // e.target.remove(this);
//     // console.log('e.target:', e.target);
//     // console.log('e.currenttarget:', e.currenttarget);
//     e.target.style.color = "red";
// })
// document.querySelector('#list').addEventListener('mouseout', (e) => {
//     e.target.style.color = "green";
// })
// document.querySelector('#list').addEventListener('click', (e) => {
//     e.target.remove(this);
// })
// клас день 3 часть 1
// const myList = document.querySelector("#list");
// myList.addEventListener("click", addInput);

// function addInput(event) {
//   const myInput = document.createElement("input");
//   myInput.value = event.target.textContent;
//   event.target.textContent = "";
//   myInput.style.border = "4px dotted red";
//   event.target.append(myInput);
//   myList.removeEventListener("click", addInput);
//   myInput.addEventListener("blur", eventOff => {
//     //   event.target.textContent = eventOff.target.value;

//     event.target.textContent = eventOff.target.value;
//     myInput.removeEventListener("blur", (eventOff) => {
//       event.target.textContent = eventOff.target.value;
//     });
//     myList.addEventListener("click", addInput);
//     // myInput.remove();
//   });
// }
const needForm = document.querySelector(".js_form");

needForm.addEventListener("submit", handleSub);

// function handleSub(event) {
//   event.preventDefault();

//   const form = event.currentTarget;
//   console.log(form.elements);

//   console.log(form.elements.inpText.value);
//   console.log(form.elements.passwordMy.value);
// }

function handleSub(event) {
  event.preventDefault();

  const form = event.currentTarget;
  console.log(form);
  
  const dataForm = new FormData(form);
  //   console.log(dataForm);

  const obj = {};
  
  dataForm.forEach((value, key) => {
    obj[key] = value;
  });

  console.log(obj);
}
