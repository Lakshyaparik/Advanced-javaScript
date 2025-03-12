// const img=document.querySelector('.images').addEventListener('click',()=>{
//    console.log('click on images');
   
// })
// const img2=document.querySelector('.dumyimg2').addEventListener('click',(e)=>{
// // e.stopPropagation()
// console.log(e.target);

// console.log('clicked on img2');
// },true)

// function changebg()
// {
//     const name=document.getElementById('name').style.backgroundColor = "lightblue"
// }
// function changetxt()
// {
//      const lastname=document.getElementById('last-name').style.textTransform='uppercase'
// }

// document.querySelector('.google').addEventListener('click',(e)=>{
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
    
// })

document.querySelector('.images').addEventListener('click',(e)=>{
    console.log(e.target)
    let removeit=e.target.parentNode
    removeit.remove()
})