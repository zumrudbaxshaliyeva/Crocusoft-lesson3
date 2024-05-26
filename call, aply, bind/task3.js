// 3.Funksiyanı Bind ilə Bağlama
// Bir funksiyanı bind istifadə edərək başqa bir obyektə bağlayın və bu bağlı funksiyanı çağırın.

let obj = {
    age:20,
    getMyAge(){
        return this.age
    }
}

let obj2 = {
    age:27
}

const bind = obj.getMyAge.bind(obj2)

console.log(bind())