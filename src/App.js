import React from 'react';
import './App.css';

const Test = ({title}) => {
  return(
    <h1>{title}</h1>
  )
} 


function App() {
  return (
    <div className="App">
      <Test title="je suis un titre"></Test>
    </div>
  );
}

export default App;
