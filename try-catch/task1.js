// 1.Sadə Try...Catch İstifadəsi
// Bir səhv yaradacaq sadə bir kod yazın və bu səhvi try...catch bloku ilə tutun. Səhv mesajını console-a yazdırın.

function number(x){
    if(typeof x !== 'number'){
        new Error('x bir reqem olmalidir')
    }

    console.log(num)
}


try {
   number('salam')
} catch (error) {
    console.log(error.message)
}