let obj = {
    name : 'Agsaqqal',
    salary : 12900,

    showInfos(name, surname, age) {
        return (
        `${name} ${surname} ${age} years old. Worker salary is $${this.salary}`
        )    
    }
}

let obj2 = {
    name: 'Ferhad',
    salary: 1500
}

console.log(obj.showInfos.apply(obj2, ["Ferhad", "Eyvazov", 27]));