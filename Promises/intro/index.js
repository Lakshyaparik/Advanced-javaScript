
const mypromise=new Promise((resolve,reject)=>{
    //async task,networking: xmlhttps req,cryptography
    setTimeout(() => {
        //console.log("async task executed");    
    }, 1000);
    resolve()
})

mypromise.then(()=>{
   // console.log("promise completed!");
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log("working on!");
    }, 2000);
    resolve()
}).then(()=>{
    //console.log("promise completed");
})

new Promise((resolve,reject)=>{
    setTimeout(() => { 
        const user={
            username: "laskhya",
            mobileno: "9202xxxx"
        }
        //resolve(user)
        //resolve([1,2,3,4,5,5])
        resolve({user:"rajxys",email:"abc@gmail.com"})
    }, 2000);
}).then((data)=>{
    //console.log(data);
})

const returnpromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error=false;
        if(!error)  
        {
            setTimeout(() => {
                resolve("Your solution is here....")
            }, 2000);
        }
        else{
            console.log(" ups! error: ",error);
        }
    }, 2000);
})
 .then((data)=>{
//     console.log(data);
 }).catch((data)=>{
//     console.log(data);
})

const value=returnpromise.then((data)=>{//we can't return the value in variable because promise pending is going first....

   // console.log(data);
    return data;
}).catch((data)=>{
    //console.log(data);
})
//console.log("value: ",value);


new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error=false;
        if(!error)  
            {
                setTimeout(() => {
                    resolve("Your solution is here....")
                }, 2000);
            }
            else{
                console.log(" ups! error: ",error);
            }     
    }, 2000);
})
.then((data)=>{
    //console.log("first then...",data);
    return data;//return the data in bottom then
})
.then((data)=>{//accept the return data from top then
    //console.log("second then..");
    //console.log(data);
})
.catch((data)=>{//excuted when promise were reject
    //console.log(data);
})
.finally(()=>{
    //console.log("finally fun is executed");
})

const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error=false
        if(!error){
            resolve("promise1 is resolved")
        }
        else{
            reject("promise1 is rejected")
        }
    }, 2000);
})
promise1.then((data)=>{
    //console.log(data);
    return data;
})
.then((data)=>{
    const value=data;//here in second then we can assign the value in variable
    //console.log(value);
    
})
.catch((data)=>{    
    console.log(data);
})
.finally(()=>{
    //console.log("promise1 is completed");
})

//async await in promises
const promise2=new Promise((resolve,reject)=>{ 
    setTimeout(() => {
        const error=true
        if(!error){
            resolve("promise2 is resolved")
        }
        else{
            reject("promise2 is rejected")
        }
    }, 2000);       
})

async function mypromise2(){
   // await promise2;
    try{
        const data=await promise2;
        console.log(data);
    }
    catch(error){
        //console.log(error);
    }
    finally{
        //console.log("promise2 is completed");
    }
}
mypromise2();

async function getUsers(){
    const response=await fetch("https://randomuser.me/api");
    //console.log(response);
    //const data=await response.json();
    //console.log(data);
    try{
       const data=await response.json();
       console.log(data);
       
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("fetching users process completed");
    }
}
getUsers();

//get user from fetch by .then and .catch

async function getUser(){
    const response=await fetch("https://randomuser.me/api");
    const data=await response.json()
    .then((data)=>{
        console.log(data);
    })
    .catch((data)=>{
        console.log(data);
    })
    .finally(()=>{
        console.log("process complete");
    })
    
}
//another way of fetching
fetch("https://randomuser.me/api")
.then((response)=>{
    return response.json();
})
// .then((data)=>{
//     console.log(data);
    
// })
.catch((error)=>{
    console.log(error);
})