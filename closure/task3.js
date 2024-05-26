// 3.Closure ilə Xüsusi Mesajlaşma
// İstifadəçiyə xüsusi mesajlar yarada biləcək bir funksiya yazın. İstifadəçi adı və mesajı parametr olaraq almalı və bu məlumatları saxlayaraq hər çağırıldığında saxlanan məlumatlara əsaslanan bir mesaj qaytarmalıdır.


function messageWithClosure (username){
    return function(message){
        return `${username}: ${message}`
    }
}

const closure1 = messageWithClosure('cevahir')
const closure2 = messageWithClosure('nigar')

console.log(closure1('salam Nigar'))
console.log(closure2('salam'))
console.log(closure1('necesen'))
console.log(closure2('yaxsiyam sen necesen'))
console.log(closure1('cox sagol mende yaxsiyam :)'))