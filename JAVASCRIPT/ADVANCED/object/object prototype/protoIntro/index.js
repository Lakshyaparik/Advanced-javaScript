function Person(name, age) {
  this.name = name,
  this.age = age
}
Person.prototype.caste='general';
const lakshya=new Person('lakshya',21);
//console.log(lakshya.caste)

Person.prototype.ageIncr=()=>{
   this.age++;
}

const rahul=new Person('rahul',22);
//console.log(rahul.ageIncr());
//console.log(rahul.age);

Object.prototype.lakshya=function () {
  console.log('lakshya');
}

//Person.lakshya();
const array=[1,2,3,4,5];
console.log(array.lakshya());
Array.prototype.fun=function(){
  console.log('fun');
}
//array.fun();
// Person.fun();
