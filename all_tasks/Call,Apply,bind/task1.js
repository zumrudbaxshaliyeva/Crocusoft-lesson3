const detectGender ={
    showInfo: function(){
        return `${this.name} was detected as ${this.gender}`;
    }
};

const animal1 = {
    name: "lion",
    gender: "male"
}
const animal2 = {
    name: 'rabbit',
    gender: 'female',
}

const animals= {
    animal1: detectGender.showInfo.call(animal1),
    animal2: detectGender.showInfo.call(animal2)
}

console.log(animals);



const persons ={
    showInfo: function () {
        console.log(`${this.firstName} ${this.lastName} : ${this.salary}`);
    }
}

const worker = {
    firstName : 'Ali',
    lastName : "Rzayev",
    salary : 1200
}

persons.showInfo.call(worker);
