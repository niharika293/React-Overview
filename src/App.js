// Components can be functions, classes.
// Restrictions on Keywords : class -> className, for -> htmlFor
// JSX expressions must return single parent element.
// To use header component, import & embed like an XML Tag. 
// For class based components, important to have {import react from react}

import React from 'react'
import Header from './Components/Header'
function App() {
  const x = false;
  return (
    <div className="Container">
      <h1>Hello From React</h1>
      <h2>Hello {x?'Yes':'No'}</h2>
      <Header title = "Heyy header!!"/>
      {/* <Header /> */}
    </div>
  );
}
// Class Based Component
// class App extends React.Component{
//   render(){
//     return <h1>Hello from class!!</h1>
//   }
// }

export default App;
