let carsEngine = {
    showEngine: function (engine) {
        return `${this.name} is ${engine} and products in ${this.country} in ${this.year}`
    }
};

const  car ={
    name : "Mercedes",
    year: 2012,
    country : "Germany",
}

console.log(carsEngine.showEngine.apply(car, [2.2]));

