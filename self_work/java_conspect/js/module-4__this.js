"use strict";

function counter (){
  let a =0;
  function increment(){
    a++;
    console.log(a);
    
  }
  return increment;
}

let user = counter()
let user2 = counter()


console.log(user);
console.log(user);
console.log(user2);
console.log(user2);
console.log(user2);


(Замыкание) это способность функйии Запоминать то лексичестоее 
окружение в котором она была СОЗДАНА (а НЕ вызвана) !!!!!!!!!!!

this это контекст.Это скрытое свойство функции в которое 
записывается ССЫЛКА на объект в контексте которого была 
вызвана данная функция. (определение верно для function declaration). 
для срелочных функций не работает

стрелочная функция не имеет СВОЕГО контекста (this). туда записсывается ссылка на контекст родителя в момент ее создания


call apply bind назубок выучить

call и apply методы функций (   function.call/function.apply   ) 
которые вызывают исходную фенкцию(то где они были вызваны) 
и на это один вызов привязывают контекст который мы передаем 
1м аргументом в call и apply 

Метод bind() создаёт новую функцию, которая при вызове устанавливает 
в качестве контекста выполнения this предоставленное значение. 
В метод также передаётся набор аргументов, которые будут установлены 
перед переданными в привязанную функцию аргументами при её вызове.


bind это метод функции который НЕ ВЫЗЫВАЕТ, не создает функцию а ДЕЛАЕТ КОПИЮ 
функйии на которой он был вызван к которой НА ВСЕГДА приязывает контекст (this) !!!!!!!!!!
- (первый переданный аргумент )



папарметры это внутренние переменные функции
аргументы прийдет как значение параме


замк сппособн тру