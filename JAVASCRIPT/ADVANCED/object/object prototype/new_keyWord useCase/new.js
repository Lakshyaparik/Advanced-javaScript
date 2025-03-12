function Person(name, age) {
  this.name = name;
  this.age = age;
  function sayHello() {
  console.log(this.name + ' says hello');
  }
}
//in constructor function we can't add properties by explicitly defining them
//we can add properties by using prototype
Person.prototype.caste='general';
Person.caste='general';
const lakshya=new Person('lakshya',21);
console.log(lakshya.caste);
console.log(lakshya);
const rahul=new Person('rahul',22);
// console.log(rahul.caste.toString());

//  here we can't access caste property of rahul object
//  because the prototype is a parent so we directly use 
console.log(rahul.caste.toUpperCase());
//it inherit properties of prototype and also itself



