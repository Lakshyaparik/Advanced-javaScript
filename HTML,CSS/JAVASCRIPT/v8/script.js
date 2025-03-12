const box1=document.getElementById('box-1')
console.log(box1);

box1.classList.add('round-border')

const boxes=document.getElementsByClassName('box')
for(let i=0;i<boxes.length;i++)
{
    boxes[i].classList.add('round-border')
}
box1.classList.remove('round-border')
const newp=document.createElement('p')
newp.innerText="heelo this is a new paragraph";
const container=document.getElementById("container")
container.appendChild(newp)
newp.classList.add("box")

// const abc=document.getElementById('box-1')
// console.log(abc);
// abc.innerHTML='<h1>helo</h1>'
// abc.style.backgroundColor='red'
// // const mybody=document.body;
// const box2=document.getElementById('box-2')
// box2.style.backgroundColor='red'
// console.log(box2);
// const abc=document.getElementsByTagName('p')
// console.log(abc);
// const boxes=document.getElementsByClassName('box')
// console.log(boxes);

// const guest=document.querySelectorAll('.guest')
// console.log(guest);
