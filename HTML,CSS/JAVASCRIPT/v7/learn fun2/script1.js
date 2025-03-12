// flour----->dough---->vegetables---->chezze---->pizza
function getflour(callback)
{
    setTimeout(() => {
        const flour="🕊️";
        console.log("here is your flour",flour);
        return callback(flour)
    }, 2000);
}

function getdough(callback)
{
    setTimeout(() => {
        const dough="🌰";
        console.log("here is your dough",dough);
        return callback(dough)
    }, 3000);
}

function getvegetables(callback)
{
   setTimeout(() => {
    const vegetables="🍅";
    console.log("here your's vegetables",vegetables);
    return callback(vegetables)
   }, 1000);
}

function getchezze(callback)
{
    setTimeout(() => {
        const chezze="🍥";
        console.log("Here is yours chezze",chezze);
        return callback(chezze)
    }, 1000);
}

function getpizza(dough,vegetables,chezze,callback)
{
    setTimeout(() => {
        const pizza="🍕";
        console.log("here your's pizza");
        return callback(pizza)  
    }, 5000);
}

const result=getflour((flour)=>{
    getdough((dough)=>{
        getvegetables((vegetables)=>{
            getchezze((chezze)=>{
               getpizza(dough,vegetables,chezze,(pizza)=>{
                console.log("Hurray's Eat Your Pizza");
               })
            })
        })
    })
})