function User(userName,userAge,isLoggedIn){
    this.userName = userName;
    this.userAge = userAge;
    this.isLoggedIn = isLoggedIn;
    
    function greet(){
        console.log('Hello '+this.userName);
    }
    return this;
}
userONe= new User('John',25,true);//new keyword for separate memory allocation
userTwo= new User('Abc',22,false);
console.log(userONe);
