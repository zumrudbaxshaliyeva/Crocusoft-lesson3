// CLOSURE fUNCTİONS(IC-ICE FUNKSIYALAR)


function parent () {
    let num = 2;
    function inner () {
        console.log(num);
    }

    return inner;
}
parent()();
let closure = parent();
closure();