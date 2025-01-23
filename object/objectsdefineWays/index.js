const person={};  //object literal
person.name='John';
person.age=30;
person.mobno=123456789;
//console.log(person);


const person1=new Object();//object define through constructor
person1.name='rakhi';
person1.age=30;
person1.mobno=123456789;
//console.log(person1);

function Person(firstName,lastName,age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.getFullName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const lakshy=new Person('lakshy','sharma',30);
console.log(lakshy.getFullName());

