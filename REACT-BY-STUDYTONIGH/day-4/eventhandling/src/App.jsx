import './App.css'

function App() {

  const handleClick = () =>{
    const input = document.getElementById('enter');
    const value = input.value;
    console.log(value);
    input.value = ''; // Clear the input field after alert

  }

  return (
    <>
     <input type="text" placeholder='enter text here' id='enter'/>
     <br />
     <button onClick={handleClick} >Click This!</button>
    </>
  )
}

export default App
