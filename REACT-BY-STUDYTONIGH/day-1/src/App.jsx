function App(){

  const name='lakshya'//we can use java script with html 
  const lastName=<h1>pareek</h1>

  //object
  const person={
    name:"lakshya",
    age:12
  }

  //function
  const helloWorld=()=>"hello world"


  return(
  <>
  {person.age}
  {helloWorld}
  <h1>Hello this is {name}{lastName} me and i am thsi</h1>
  </>
  )
}

export default App