const accordians=document.querySelectorAll('.accordian')
accordians.forEach(accordian=>{
   
    const answer=accordian.querySelector('.answer')
    const icon=accordian.querySelector('.icon')

    accordian.addEventListener('click',()=>{
        if(icon.classList.contains('active'))
        {
            icon.classList.remove('active')
            answer.style.maxHeight=null;
        }
        else
        {
            icon.classList.add('active')
            answer.style.maxHeight=answer.scrollHeight + 'px';
        }
    })
})
