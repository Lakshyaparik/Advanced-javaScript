class User{
    constructor(userName){
        this.userName=userName;
    }
    userDisplay(){
        console.log(`Username is : ${this.userName}`);
        
    }
}
class Employee extends User{    //extends is we use to inherit the properties which class we wants
    constructor(EmployeeName,age,salary){
        super(EmployeeName)//super is basically refers to upper class constructor variable
        this.age=age;
        this.salary=salary;
    }
    employeeDisplay(){
        console.log(`EmployeeName: ${this.userName} Age: ${this.age} Salary: ${this.salary}`);   
    }
}
const yash=new Employee("Yash",40,40000)
//yash.employeeDisplay()
//yash.userDisplay()
//console.log(yash instanceof User);
