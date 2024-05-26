// 1. Funksiyanı Call ilə Çağırma
// Bir obyekt təyin edin və bu obyekt üzərində bir metod yazın. Bu metodu başqa bir obyektin kontekstində call istifadə edərək çağırın.

let obj = {
    name:'cevahir',
    surname:'huseynli',
    getFullName(){
        return `${this.surname} ${this.name}`
    }
}

let obj2 = {
    name:'xedice',
    surname:'hesenova'
}

console.log(obj.getFullName.call(obj2))

