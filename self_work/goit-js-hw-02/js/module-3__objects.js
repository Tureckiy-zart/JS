//========================================
// const product = {
//   name: "apple",
//   prise: 100,
//   prop: "red",
//   description: "sdfsdfsdfdf"
// };
// const key = "description";
// console.log(product.prise);
// console.log(product["name"]);
// console.log(product[key]);

// product.prise = 200;
// console.log(product.prise);

// const target = {
//   name: "name-01",
//   value: "value-01"
// };

// const fromData = {
//   [target.name]: target.value
// };
// console.log(fromData);
//========================================
// const storege = {
//   items: [
//     { id: "id-1", name: "name-01", price: 30 },
//     { id: "id-2", name: "name-02", price: 40 }
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       console.log(this.items[i]);
//       if(product.id === id){
//         console.log('Object Includes');
//         console.log('i :', i);
//         this.items.splice(i, 1)
//       }
//     }
//   }
// };

// console.table(storege.getItems());

// storege.addProduct({ id: "id-added", name: "name-added", price: 30 });
// console.table(storege.getItems());
// storege.removeProduct('id-2');
// console.table(storege.getItems());
// // console.log(removeProduct("id-2"));

//========================================

// const product = {
//   name: "bread",
//   price: 100,
//   quantity: 20
// };
//for in лучше не испоользовать впринцепе. он медленный и плохо работает
// for (const key in product) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// const keys = Object.keys(product);
// const values = Object.values(product);

// for (const key of values) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// for (const value of values) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }
// console.log(keys);
// console.log(values);

// const salary = {
//   bob: 100,
//   nick: 200,
//   mary: 300
// };

// let total = 0;

// const salaryValues = Object.values(salary);
// for (const value of salaryValues) {
//   total += value;
// }
//========================================
// const salaryCeys = Object.keys(salary);
// for (const key of salaryCeys) {
//   total += salary[key]; // почему оно работает? salary[key] должен же выдавать имена и не значения
// работает потому что salary[key] мы обращаемся так же к value of key
// }

// console.log(total);
//========================================
1.17 готовое решение
