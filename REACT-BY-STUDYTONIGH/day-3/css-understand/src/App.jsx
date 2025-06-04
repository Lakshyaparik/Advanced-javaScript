function App(){

    // Inline CSS in React
    const mystyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
    }

    return(
        <>
        <h1 style={mystyle} >hello this is app for css inline</h1>
        </>
    )
}

export default App;