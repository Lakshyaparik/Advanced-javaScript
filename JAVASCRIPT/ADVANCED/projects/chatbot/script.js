window.addEventListener('DOMContentLoaded',()=>{
    sessionStorage.setItem('theme','dark')
    if(sessionStorage.getItem('theme') === 'dark'){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }
})

document.querySelector('.theme').addEventListener('click',()=>{
    const theme = sessionStorage.getItem('theme')
    if(theme === 'light'){
        document.body.classList.add('dark')
        sessionStorage.setItem('theme','dark')
    }else{
        document.body.classList.remove('dark')
        sessionStorage.setItem('theme','light')
    }
})

document.querySelector('#send-button').addEventListener('click',(e)=>{    
    // Prevent the default form submission
    //get the form data by formdata constructor

    e.preventDefault()
    let form=document.querySelector('.input-form')
    const formData = new FormData(form)
    document.querySelector('#chatbot-input').value=''

    const div=document.createElement('div')
    div.classList.add('user-message')
    div.innerHTML=`<p>${formData.get('user-input')}</p>`

    document.querySelector('.user-input-show').appendChild(div)
    const container=document.querySelector('.container');
    //
    container.scrollTop=container.scrollHeight
    
})