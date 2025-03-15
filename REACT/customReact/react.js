
function customRender(element,container){
    let domElement=document.createElement(element.type)
   for (const prop in element.props) {
    if(prop=='Children')
        domElement.innerHTML+=element.props.Children;
    else
    domElement.setAttribute(prop,element.props[prop]);
   }

    container.appendChild(domElement)
}
const createElement={
    type:'h1',
    props:{
        color:'red',
        Children:'this is h1 in custemreact element'
    }
}

const root=document.querySelector('.root')
customRender(createElement,root)

