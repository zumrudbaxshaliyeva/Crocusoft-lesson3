// 1. Sadə Closure Yaratma
// Bir funksiya yazın və içində başqa bir funksiya təyin edin. İçəridəki funksiya, xaricdəki funksiyanın dəyişəninə daxil ola bilsin. Bu closure-u dəyişəndə saxlayın və çağıraraq düzgün nəticə verdiyini yoxlayın.

function a(x) {
    function b(y) {
        return x * y
    }
    return b
}


const closure = a(5)
const result = closure(4)
console.log(result)