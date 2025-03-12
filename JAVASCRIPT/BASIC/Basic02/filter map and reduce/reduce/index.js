const arr=[1,2,3]
const myarr=arr.reduce((acc,curr)=>{
    //console.log(`ACCURMULATOR : ${acc} and current value : ${curr}`);
    return acc+curr
},0)
//console.log(myarr);

const shoppingCart=[
    {
        itemName:'C++ Course',
        itemPrice:3999
    },
    {
        itemName:'js Course',
        itemPrice:599
    },
    {
        itemName:'Python Course',
        itemPrice:6999
    },
    {
        itemName:'Java Course',
        itemPrice:1999
    }
]
const bill=shoppingCart.reduce((acc,item)=>{
    return acc+item.itemPrice
},0)
console.log(bill,"$");
