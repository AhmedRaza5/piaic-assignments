import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";

const App = () => {
  const [count,setCount] = useState(0)
  const incrementCount = ()=>{
      setCount(count + 1)
  }
  const decrementCount = ()=>{
    if(count == 0){
      setDisabled(true)
    }
      setCount(count - 1)
  }
  const reset = () =>{
    setCount(0)}
  return (
    <div style={{textAlign: "center" }}>
      {/* <h1 style={{ color: "red", textAlign: "center" }}>The Isfhan Ahmed</h1> */}
      <button onClick={incrementCount}> UP</button>
             <h2>{count}</h2>
            <button onClick={decrementCount}>DOWN</button>
            <button style={{marginLeft: "20px"}} onClick={reset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
