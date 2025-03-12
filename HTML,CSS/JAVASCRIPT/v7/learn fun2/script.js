// console.log("hello");

// setTimeout(function(){console.log("wait for me");},3000)
// console.log("world");
// console.log("its");
function getchese(callback)
{
    console.log("Your chese is coming");
    setTimeout(() => {
        const chese="🌰";
        callback(chese)
    }, 9000);
}
console.log(getchese((chese)=>{console.log("here is your chese",chese);
}));

