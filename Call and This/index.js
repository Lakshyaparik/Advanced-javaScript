function setUserName(userName){
    this.userName = userName;
}
function createUser(userName,email,password){
    setUserName.call(this,userName);
    this.email = email;
    this.password = password;
}
const lakshya=new createUser('lakshya','lakshy#gmial,com','lakshya123');
console.log(lakshya.userName);
console.log(lakshya.email);
