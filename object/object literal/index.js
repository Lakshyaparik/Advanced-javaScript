//object letrals                ...///also called object intializer
// const user={
//     name: 'John',
//     age: 30,
//     mobno: 123456789,
//     getaddress: function(){
//         return 'Mumbai';
//     },
//     getfullName: function(){
//         console.log(this);
                
//     }
// }
// //user.getfullName()
// console.log(this);

//console.log(user.name);
//console.log(user.getfullName());

function User(userName,UserGender,isLoggedIn)
{
    this.userName = userName;
    this.userGender=UserGender;
    this.isLoggedIn= isLoggedIn;
}
console.log();