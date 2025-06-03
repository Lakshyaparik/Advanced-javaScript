
function App() {

  const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  }

  function abc() {
    console.log('Hello from function abc');
  }
  //console.log(person.city);
  return (
    <>
     <h1>Hello {person.name}</h1>
     <h2>what is your {person.age}</h2>
     <h3>{abc()}</h3>
    </>
  )
}

export default App
