// Components can be functions, classes.
// Restrictions on Keywords : class -> className, for -> htmlFor
// JSX expressions must return single parent element.
// To use header component, import & embed like an XML Tag. 
// For class based components, important to have {import react from react}

// Styling : USing CSS within react. 4 ways :
// 1. Use stylesheet -> index.css | 2. style components (External Package) 
// 3. Inline styles using style tag | 4. CSS in JS 

import React from 'react'
import Header from './Components/Header'
function App() {
  const x = false;
  return (
    <div className="Container">
      {/* Inline styling. */}
      {/* <h1 style = {{color : 'red'}}>Hello From React</h1> */}
      <h1 style = {headingStyle}>Hello From React</h1>
      <h2>Hello {x?'Yes':'No'}</h2>
      <Header title = "Heyy header!!"/>
      {/* <Header /> */}
    </div>
  );
}

// CSS in JS.
const headingStyle = {
  color : 'red',
  backgroundColor : 'yellow'
}

// Class Based Component
// class App extends React.Component{
//   render(){
//     return <h1>Hello from class!!</h1>
//   }
// }

export default App;
