// const text = document.querySelector("#inpId1");
// text.value = 55444;
// console.dir(text);

// const span = document.querySelector(".js_list-1");
// console.dir(span);
// span.textContent = "1wss";
// console.dir(span);
// const li = document.querySelector('.js_list')
// console.log(li);
// console.dir(li.attributes);

// const input = document.querySelector('#inpId1');
// console.dir(input);
// input.value = 44;
// console.log('sssssfcs555555');

// const span = document.querySelector(".js_list")
// console.dir(span);
// console.dir(span.textContent);

// input.addEventListener('change', handleInput)

// function handleInput(event){
//     span.textContent = event.currentTarget.value;
//      console.log(event);
//      console.log(event.currentTarget.value);
//     }
//     const button = document.querySelector(`buton [data-action ="clickBtn"]`)
//     console.log(button);

//     button.addEventListener('click', handleClick55);

//     function handleClick55(event){
//         console.log(111);
//         console.log(event);
//         input.value = " ";
//         span.textContent = " ";
//     }

// const text = document.querySelector('.article-title')
// console.log(text.textContent);

// const aaa = document.querySelector('.article-text')
// console.dir(aaa.textContent);

//===================================================
// const hiddenTxt = document.getElementById('text')
// console.log(hiddenTxt.textContent);
// hiddenTxt.textContent;
// hiddenTxt.hidden = true;

// const message = document.getElementById("message")
// console.dir(message.value)
// const link = document.querySelector(".active")
// console.log(link.href);

// const image = document.querySelector('.image')
// image.src = 'https://placeimg.com/640/480/tech';
// image.alt = 350;
// console.log(image);

// const btn = document.querySelector('.btn')
// btn.style.backgroundColor = 'teal';
// btn.classList.add('some')
// console.log(btn.classList);

// const paragraph = document.getElementById('paragraph')
// console.log(paragraph);

// const elem = document.querySelector("#paragraph");
// console.log(elem.classList);
// console.dir(elem.classList.contains("dddd"));

// elem.classList.add('cls')
// console.log(elem.classList);
// elem.classList.replace('cls', 'fusk')
// elem.classList.toggle('hidden')
// console.log(elem.classList);
// elem.classList.toggle('hidden')
// console.log(elem.classList);

// const heading = document.createElement('h1');
// console.log(heading); //

// console.log(elem.classList); // ["text", "red", "big", value: "text red big"]

// console.log(elem.classList.contains("red")); // true

// elem.classList.remove("big");
// console.log(elem.classList); // ["text", "red", value: "text red"]

// elem.classList.add("new-class");
// console.log(elem.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // можно добавлять множественные классы
// elem.classList.add("a", "b", "c");
// console.log(elem.classList);

// elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
// elem.classList.toggle("hidden"); // покажется, удалили класс hidden

// // classList – это псевдо-массив, в прототипе которого есть метод forEach,
// // поэтому можно перебрать классы в цикле
// elem.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });
// const nav = document.querySelector('.nav')
// const item = document.createElement('a')
// // const div = document.querySelector('container')
// item.href ="#"
// item.classList.add('btn')
// item.textContent = 'itemCustom';

// nav.appendChild(item)
// console.log(item);
// const body = document.querySelector('.body')
// console.log(body);

// // Создадим еще один li и вставим его в конец списка
// // const item = document.createElement("a");
// // item.href = "#";
// // item.classList.add("btn");
// // item.textContent = "item 4";

// nav.appendChild(item);
// console.log(nav);
// // // Создадим заголовок и вставим его в container перед списком

// const heading = document.createElement('h1')
// console.log(heading);
// heading.textContent ='Some text'
// container.insertBefore(heading, nev)
// container.appendChild(heading)

// // const heading = document.createElement("h1");
// // heading.textContent = "Nav heading";

// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);
// console.log(container);

// const list = document.querySelector(".list");
// // console.log(list.children);
// const list1 = document.querySelector('list1')
// const image = document.querySelector(".image");

// // console.log(image.attributes);
// // console.log(image.hasAttribute('alt'));
// image.setAttribute('lol', 'Amazing')
// // console.log(image.attributes);

// const itm = document.createElement('li')
// itm.textContent = 'dedaf'
// list.append(itm)
// console.log(list);
// const clone = itm.cloneNode('true')
// clone.textContent = 'Lorem, ipsum.'
// itm.append(clone)
// // const title = createElement('h2')
// // title.textContent = "befire"
// // itm.before(title)
// console.log(list);
// const text1 = document.createElement('p')
// text1.textContent = 'oluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!;df'
// list.after(text1)

// console.log(document)
// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // lake and clouds

// image.setAttribute("alt", "amazing lake and clouds");

// console.log(image.getAttribute("alt")); // amazing lake and clouds







// const newEl = document.createElement("li");
// const newSpan = document.createElement("span");

// newSpan.textContent = "Million Dollrs USA";
// newEl.appendChild(newSpan);
// list.appendChild(newEl); ////!!!!!!!!!!!!!!!!!!
// console.gir(list);
// list.innerHTML = innerText;
// const newInnreText = `
// <li>fa</li>
// <li>ba</li>
// <li>ka</li>
// `

const array = [1, 23, 45, 6, 7, 8, 9, 0, 3];

const getData = function(array) {
    let data = '';
    array.map(item => data += `<li> ${item}</li>`)
    console.log(`data :`, data);
    return data
};

// list.insertAdjacentHTML('afterbegin', getData(array))
console.log(list);
console.log( getData(array));

// const text = document.getElementById("text");
// text.hidden = true; // текст стал невидимым

// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const link = document.querySelector(".active");
// console.log(link.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
