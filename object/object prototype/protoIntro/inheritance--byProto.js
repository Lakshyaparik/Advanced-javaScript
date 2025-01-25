const Human={
    walk:()=>{
        console.log("Human is walking");
    },
    talk:()=>{
        console.log("Human is talking");
    }
}
const father={
    name: "rajendra",
    age: 45,
    caste: "Brahmin",
    __proto__:Human///this is not a good practice
}
const lakshya={
    name: "lakshya",
    age: 21,
    __proto__:father///this is not a good practice
}
//console.log(lakshya.name); 
Object.setPrototypeOf(lakshya,Human)//this is a good practice to set prototype of object 
//setPrototypeOf is a method of Object class which is used to set prototype of object 
//it takes two arguments first is object and second is prototype object 
//it returns object
//lakshya.walk();

const userName="lakshya   ";
String.prototype.trueLength=function(){
    console.log(this);
   console.log(`True length is ${this.trim().length}`);
}
userName.trueLength();
"rahul__".trueLength()
"muni".trueLength()
