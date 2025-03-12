function bookCab(destination){
    return new Promise((resolve, reject) => {
    console.log('Searching for Cab...');
    setTimeout(() => {
        let response=Math.random()>0.2
        if(response)
            return resolve(`Cab booked to ${destination} 🚖`)
        else
        return reject('No drivers available ❌')
    }, 3000);
})
}

// bookCab('jaipur')
// .then((response)=>{
//     console.log('hurray cab found');
// })
// .catch((error)=>{node
//     console.log('error: ',error);
    
// })

async function getCab() {
    try{
        let response=await bookCab('jaipur')
        if(response)
            console.log('hurray',response); 
    }
    catch(error){
        console.log('error',error)
        
    }
}
getCab()