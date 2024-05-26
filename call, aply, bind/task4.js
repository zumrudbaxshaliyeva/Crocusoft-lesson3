// 4.Apply ilə Parametrli Funksiya Çağırma
// Bir obyektə parametrli bir metod yazın və apply istifadə edərək həmin metodu başqa bir obyektə tətbiq edin.

let obj = {
    a:11,
    myMethod(x){
        return this.a + x
    }
}

let obj2 = {
    a:7
}

console.log(obj.myMethod.apply(obj2, [4]))