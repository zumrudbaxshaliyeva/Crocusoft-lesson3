// Closure 1 ----------------------

// function sayHello(x) {
//   return function () {
//     return `Hello ${x}`;
//   };
// }

// const hello = sayHello("Mary");

// console.log(hello());

// Closure 2 ----------------------

// function decrement() {
//   let x = 5;
//   return function child() {
//     console.log((x -= 3));
//   };
// }

// const dcmnt = decrement();
// dcmnt();
// dcmnt();
// dcmnt();
// dcmnt();

// Closure 3 ----------------------

// function messageParent(name, msg) {
//   return function message() {
//     console.log(`${name} is a ${msg}`);
//   };
// }

// const message1 = messageParent("Jonathan", "teacher");
// const message2 = messageParent("Ali", "driver");
// message1();
// message2();

// Closure 4 ----------------------

// function complexCounter(x) {
//   return function counter() {
//     return {
//       increment: () => console.log(++x),
//       decrement: () => console.log(--x),
//       getValue: () => console.log(x),
//     };
//   };
// }

// const counter = complexCounter(10);
// counter().increment();
// counter().increment();
// counter().getValue();
// counter().decrement();

// Closure 5 -------------------------

// function getData(url) {
//   return function fetchData() {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };
// }

// const api = getData("https://jsonplaceholder.typicode.com/todos/1");

// api();

// Closure 6 -------------------------

// function increment(x) {
//   return function child() {
//     console.log((x += 4));
//   };
// }

// const inc = increment(3);
// inc();
// inc();
// inc();
// inc();
