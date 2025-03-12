const user={
    username: "lakshya",
    password: "1234",
    greetmessage: function(){
        console.log(`hello ${this.username},Your welcome in website`);
        // console.log(this);
    }
}
// console.log(user);
// user.greetmessage();
// user.username="pareek"
// user.greetmessage();
function chai()
{
    let username="lakshya";
    console.log(this.username);
    
}
// chai()....//this is not working in function
const abc=function()
{
    let username="lakshya";
    console.log(this.username);
}
// abc()this is not working in function even variable fun

//arrow function
const xyz=()=>{
    let a=10
    return a;
}
// xyz();
//imlicitly return arrow function
const arrow=(num1,num2)=>(num1+num2);  //we could not return while parathesis
console.log(arrow(5,3));
 