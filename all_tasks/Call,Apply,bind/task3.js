let obj2 = {
    name : "Ferhad"
}

function getMyName () {
    return this.name
}

let newBind = getMyName.bind(obj2);
console.log(newBind());