const arr=[1,2,3,4]

for (const num of arr) {
    //console.log(num); 
}
const name="lakshya pareek"

for (const char of name) {
  //  console.log(`each character of name is ${char}`);
}

//map in javascript //for op loop mostly used for that 
const map=new Map()
map.set('rajsasthan','jaipur')
map.set('maharastra','mumbai')
map.set('madhya pradesh','bhopal')

// console.log(map);
for (const [element,value]of map) {
   // console.log(element +"=>",value);
}

const myobj={
    rajasthan:'jaipir',
    maharastra:'mumbai',
    madhyaPradesh:'bhopal'
}

for (const key in myobj) {
   // console.log(`the capital of ${key} is ${myobj[key]}`);
}

const myarr=["lakshya","rishi","abcd","qute","aditi"]
myarr.forEach(function(item){
    //console.log(item);
})
myarr.forEach((value,index,arr)=>{
   // console.log(value,index,arr);
})
function printname(item)
{
   // console.log(item);
}
myarr.forEach(printname)

const users=[
    {
        userid:'1234',
        usergmail:"1234@gmail.com"
    },
    {
        userid:'raj455',
        usergmail:'raj@gmail.com'
    },
    {
        userid:'sureh405',
        usergmail:'suresh405@gmail.com'
    }
]
users.forEach((user)=>{
    console.log(user.userid);
})