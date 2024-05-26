// 2. Sadə Closure Yaratma
// Bir counter funksiyası yazın. Bu funksiya hər çağırıldığında bir dəyəri artırmalı və nəticəni qaytarmalıdır. Dəyəri qorumaq üçün closure istifadə edin.


function counter(){
    let count = 0

    return function(){
        count += 1
        return count
    }
}

const closure = counter()

console.log(closure())
console.log(closure())
console.log(closure())



// function counter() {
//     let count = 0

//     return function countPlus(){
//         count ++
//         return count
//     }
// }

// const closure = counter()
// const result = countPlus()

// console.log(result)
// console.log(result)