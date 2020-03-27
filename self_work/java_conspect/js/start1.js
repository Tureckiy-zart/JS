// 'use strict'

// const button = document.querySelector('.button')
// console.dir(button.textContent);
// button.textContent = 'bye'
// console.log(button.textContent);

// const list = document.querySelector('.site-menue')
// const li = document.querySelector('.site-menue-item')
// console.dir(li)

// const img = document.querySelector('.img')
// console.log(img.attributes);
// img.alt = '200 px';
// console.log(img.alt);

// button.addEventListener('click', addImg)

//   function addImg(){
//         img.src = 'https://images.pexels.com/photos/3884832/pexels-photo-3884832.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
//         img.width = 500;
//         imh.height = 800;
//   }

// function activeClass(){
//   list.classList.add('.block_1')
// }

// activeClass()

//   console.log(list);

const user = {
  name: "Deonte Feil",
  phone: "994-982-5660",
  email: "Deonte.Feil@hotmail.com",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg",
  address: {
    country: "USA",
    city: "South Maximoville"
  }
};

{
  //      <div class="user-profile">
  //   <img
  //     src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"
  //     alt=""
  //     class="avatar"
  //   />
  //   <ul class="info">
  //     <li><b>Name:</b> Deonte Feil</li>
  //     <li><b>Phone:</b> 994-982-5660</li>
  //     <li><b>Email:</b> Deonte.Feil@hotmail.com</li>
  //     <li><b>Location:</b> USA, South Maximoville</li>
  //   </ul>
  //   </div>
}

const profileContainer = document.querySelector(".profile-container");
const profile = createUserProfile(user);
profileContainer.appendChild(profile);

function createUserProfile({ name, phone, email, avatar, address }) {
  const container = document.createElement("div");
  container.classList.add("user-profile");

  const image = document.createElement("img");
  image.src = avatar;
  image.alt = "user avatar";
  image.classList.add("avatar");

  const adress = container.appendChild(image);
  const infoList = document.createElement("ul");
  infoList.classList.add("info");
  const nameField = createInfoListItem("Name", name);
  const phoneField = createInfoListItem("Phone", phone);
  const emailField = createInfoListItem("Email", email);
  const addressField = createInfoListItem(
    "Email",
    `${address.country}, ${address.city}`
  );
  infoList.append(nameField, phoneField, emailField, addressField);
  container.appendChild(image);
  container.appendChild(infoList);
  container.append(image, infoList);
  return container;
}

console.dir(profile);

//   return container;
// }

function createInfoListItem(label, text) {
  const item = document.createElement("li");
  const itemLabel = document.createElement("b");
  itemLabel.textContent = `${label}: `;
  const itemText = document.createTextNode(text);

  item.append(itemLabel, itemText);

  return item;
}
