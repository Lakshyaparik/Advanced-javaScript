//callback function
//method 1
function calculate(a,b,operation)//calling function
{
   return operation(a,b);
}
function add(a,b)//main funciton
{
    return a+b;
}
const beat=calculate(2,4,add)//pass two value and function
console.log(beat);           //as parameter not as funtion what we want

//method 2
const subraction=calculate(5,2,function(x,y){return x-y})
console.log(subraction)

//method 3
const mul=(a,b)=>a*b;

console.log(calculate(5,5,mul));
