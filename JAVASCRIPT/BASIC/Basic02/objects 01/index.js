// object in javascript are two ways to declare
// 1. object literal
// 2. object constructor  //singleton method

//object constructor
let person = new Object();
person.name = "John";
person.age = 30;
// console.log(person);

//object literal
//add symbol datatype in object
const mysym=Symbol("hi");
let person1={
    [mysym]:"hello",
    name:"happy",
    age:30,
    gmail: "abc@gmail.com"
}
// console.log(person1);
// console.log(person1[mysym]);
// console.log(person1["name"]);
// person1.name="lakshya";
// console.log(person1);
// Object.freeze(person1);
// person1.name="akash";
// console.log(person1);
person1.treet=function(){
    console.log(`hello ${this.name} how are you`);
}
person1.treet();
console.log(person1.treet);
console.log(person1.treet());
