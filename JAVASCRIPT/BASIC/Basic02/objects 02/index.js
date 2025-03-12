// const appuser={
//     id: "abc23x",
//     email: "abc@gmail.com",
//     username : {
//         fullname :{
//             firstname : "abc",
//             lastname : "xyz"
//         }
//     }
// }
// console.log(appuser.username.fullname.lastname);
// const obj1={ 1: "a",2: "b"}
// const obj2={ 2: "c",3: "d"}
// // const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);
// console.log(obj1);

//user data come from databases

const user=[
    {
        id: "abc23x",
        email: "abc@gmail.com"
    },
    {
        id: "abc23y",
        email: "xyz@gmai.com"
    },
    {
        id: "abc23z",
        email: ""
    },
    {

    }
]
console.log(Object.keys(user[0]));
console.log(Object.values(user[0]));
console.log(Object.entries(user[0]));
console.log(user[0].hasOwnProperty('email'));
