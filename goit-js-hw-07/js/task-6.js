("use strict");
// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

// Сколько символов должно быть в инпуте, указывается в его 
// атрибуте data-length.
// Если введено подходящее количество, то border инпута 
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }



const myInptu = document.querySelector('#validation-input')
// blur потеря фокуса
myInptu.addEventListener('blur', onBlur)

function onBlur(event){
  const input1 = event.currentTarget;
  const inputLength = Number(input1.dataset.length);
  
  // console.log(input1);
  // console.log(inputLength);
  if(input1.value.length === inputLength){
    input1.classList.remove('invalid')
    input1.classList.add('valid')

  } else {
    input1.classList.remove('valid')
    input1.classList.add('invalid')
}


}

// console.log(myInptu.nodeValue.length);
