///  Call

// const obj = {
//   name: "Alice",
//   job: "engineer",
//   age: 29,
//   bornYear: function () {
//     console.log(this);
//     return new Date().getFullYear() - this.age;
//   },
// };

// const obj2 = {
//   name: "Kamran",
//   job: "teacher",
//   age: 27,
// };

// obj2.bornYear = obj.bornYear.call(obj2);
// console.log(obj2.bornYear);

/// Apply

// obj2.bornYearWithApply = obj.bornYear.apply(obj2);
// console.log(obj2.bornYearWithApply);

/// Bind

// obj2.bornYearWithBind = obj.bornYear.bind(obj2);

// console.log(obj2.bornYearWithBind());

/// Method with parameter

// const person = {
//   firstName: "Jack",
//   lastName: "Smith",
//   info: function (age) {
//     return `${this.firstName} ${this.lastName} is a ${age} years old`;
//   },
// };

// console.log(person.info.apply(person, [35]));

// -------------------------------

/// TRY CATCH

// try {
//   if (10 > 50) {
//     console.log("The comparison is true");
//   } else {
//     throw new Error("the comparison is false");
//   }
// } catch (err) {
//   console.log(err.message);
// }

// async function fetchData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchData();
