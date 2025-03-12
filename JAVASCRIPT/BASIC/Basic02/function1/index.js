//rest operator in js 

function cartcalculator(val1,...num1)///...rest operator
{
    return num1;
}
// console.log(cartcalculator(200,400,500,599));
let User={
    Username: 'abc',
    Email: 'abc@gmail'
} 
function handleobject(anyobject)
{
    // console.log(`Username is ${anyobject.Username} and Email is ${anyobject.Email}`);
}
// handleobject(User)
handleobject({
    Username: 'abc',
    Email: "abc@gmail"
})
//passing object as argument

//passing a array in function
const newarry=[1,2,3,4,5,6,7,8,9]

function handlearray(getarray)
{
    return getarray[0]
}
// console.log(handlearray(newarry));
console.log(handlearray([1,2,3,4,5]));

