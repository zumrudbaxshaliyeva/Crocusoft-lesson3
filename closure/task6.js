// 6.Xüsusi Funksiya Yaratma
// Bir funksiya yaratmaq üçün closure istifadə edin. Funksiya parametr qəbul etməli və bu parametri hər dəfə çağırıldıqda müəyyən bir dəyər ilə artırmalıdır.

function nums(x) {
    return function () {
        x += 3
        return x
    }
}

const closure = nums(1)

console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())