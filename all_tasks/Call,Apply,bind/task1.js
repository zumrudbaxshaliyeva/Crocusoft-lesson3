const detectGender ={
    showInfo: function(){
        console.log(`${this.name} was detected as ${this.gender}`);
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

detectGender.showInfo.call(animal1);
detectGender.showInfo.call(animal2);



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
