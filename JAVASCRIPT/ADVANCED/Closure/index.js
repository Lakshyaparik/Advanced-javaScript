function outer(x)
{
    return function()
    {
        ++x;
        console.log("inner",x);
    }
}


let output=outer(4)
output()
output()