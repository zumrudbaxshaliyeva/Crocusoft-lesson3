// 2. Funksiyanı Apply ilə Çağırma
// Bir obyekt təyin edin və bu obyekt üzərində bir metod yazın. Bu metodu başqa bir obyektin kontekstində apply istifadə edərək çağırın.

let obj = {
    num1: 3,
    num2:6,
    sum(){
        return this.num1 + this.num2
    }
}

let obj2 = {
    num1:8,
    num2:5
}

console.log(obj.sum.apply(obj2))