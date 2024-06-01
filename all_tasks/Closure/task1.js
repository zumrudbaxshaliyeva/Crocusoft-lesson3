// CLOSURE fUNCTİONS(IC-ICE FUNKSIYALAR)
// function human(name){
//         function sayHi(){
//         console.log(`Hi I am ${name}`);
//     }
//     function sayNecesen(){
//         console.log(`${name} Bomba kimidir...`);
//     }

//     return {
//         sayHi,
//         sayNecesen

//     }
// }
// const ferhad = human("Ferhad");
// const murad = human("Murad");

// ferhad.sayHi();
// murad.sayNecesen();

// document.getElementById("blue").onclick = changeBgColor("blue")

// document.getElementById("red").onclick = changeBgColor("red")

// document.getElementById("green").onclick = changeBgColor("green");



function alpha(color) {
    function changeBgColor(){
        return ()=>{
            document.body.style.background = color;
        }
    }
        document.getElementById(color).onclick = changeBgColor(color);
}

alpha("blue");
alpha("red");
alpha("green");




// Bro Code

// function startGame(){
//     let score = 0;
    
//     function increaseScore(points){
//         score += points;
//         console.log(`Score: ${score}`);
//     }
//     function decreaseScore(points){
//         score -= points;
//         console.log(`Score: -${score}`);
//     }
    
//     function getScore(){
//         return score;
//     }
//     return {increaseScore, decreaseScore, getScore}
// }

// // score = 100000000000
// let game = startGame();
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// console.log(game.getScore());



function Person(name, age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Ad: "+ this.name+ " Yas: "+ this.age);
    }
}

function Employee(name, age, salary){
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age, this.showInfos)
    this.salary = salary;
    // this.showInfos = function(){
    //     console.log("Ad: " + this.name + " Yas: " + this.age);
    // }

}
new Person("Ferhad", 27).showInfos();

console.log(typeof(new Person));
new Employee("Murat", 18, 5000).showInfos();



















