// 4. Kompleks Counter Yaratma
// Bir counter funksiyası yazın. Bu funksiya üç metodu qaytarmalıdır: increment, decrement, və getValue. increment metodu counter dəyərini artırmalı, decrement dəyərini azaltmalı və getValue isə mövcud counter dəyərini qaytarmalıdır.

function counter() {
    let count = 0
    return {
        increment: () => {
            count += 1
            return count
        },
        decrement: () => {
            count -= 1
            return count
        },
        getValue: () => {
            return count
        }
    }

}

const closure = counter()

console.log(closure.increment())
console.log(closure.increment())
console.log(closure.decrement())
console.log(closure.getValue())
console.log(closure.increment())
console.log(closure.decrement())