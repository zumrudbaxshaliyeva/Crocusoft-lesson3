// 5.Xüsusi API ilə Closure
// Bir API funksiyası yazın. Bu funksiya bir URL qəbul etməli və həmin URL-yə HTTP sorğusu göndərməlidir. API funksiyası bir closure qaytarmalıdır ki, həmin closure sorğunun nəticəsini qəbul etməlidir. fake API istifadə edin

function fetchData(URL){
    return async function(){
        try {
            const res = await fetch(URL)
            const data = await res.json()
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }
}


const fakeApi = 'https://fakestoreapi.com/products'

const closure = fetchData(fakeApi)

closure().then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err.message)
})