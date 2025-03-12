const box1=document.getElementById("box-1")
box1.classList.add("round-border")

// function box1click()
// {
//     console.log("box-1 has been clicked");
    
// }
// const mouseOver=()=>{
//     console.log("mouse over");
    
// }
//EVent listners
box1.addEventListener('click',()=>{
    console.log("this has been clicked by user");
    
})
box1.addEventListener('mousemove',()=>{console.log("mouse is moving");
})

const box2=document.getElementById("box-2")
box2.addEventListener('mousedown',(e)=>{
    console.log("hello",e.clientX,e.clientY);
    
})
box2.addEventListener('mousemove',(w)=>{
    console.log(w.clientX,w.clientY);
})

const inputName=document.getElementById("inputName")
inputName.addEventListener('keydown',(e)=>{
    console.log("key pressed ",e.key);
})

const box4=document.getElementById("box-4")
box4.addEventListener('click',()=>{
    console.log("box4 is clicked");
    
})

const container=document.getElementById("container")
container.addEventListener('click',()=>{
    console.log("container is clicked");
    
},true)