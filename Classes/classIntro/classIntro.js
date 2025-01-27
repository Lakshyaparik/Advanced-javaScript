class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    Age(){
        let currentYear=new Date().getFullYear();
        let age=currentYear-this.year;
        console.log(`Your car is ${age} years old`);
    }
}
const myCar=new car("Ford",2014);
//myCar.Age();

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.display=function(){
    console.log(`Name:${this.name} Age:${this.age}`);
}
const lakshya=new Person("Lakshya",21);
//console.log(lakshya.display());
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`Name ${this.name} and Age ${this.age}`);
        
    }
}
const rishi=new person('rishi',20);
rishi.display()