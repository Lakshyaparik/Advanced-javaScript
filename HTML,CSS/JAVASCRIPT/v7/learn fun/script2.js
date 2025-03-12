//nested function
function addsquare(a,b)
{
    let x=square(a);
    let y=square(b);
    function square(num)
    {
        return num*num;
    }
    return x+y;
}
const x=addsquare(2,3);
console.log(x);
