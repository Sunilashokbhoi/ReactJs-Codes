
import { useRef } from 'react';
import './App.css'

function App() {
  const inputRef = useRef(null);
  const focuseInput = () =>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="yellow";
  };

  const resetBtn = ()=>{
      inputRef.current.style.backgroundColor="white";
       
  };

  return(
 <div>
    <h1>Learn</h1>    
    <input ref={inputRef} type='input' placeholder='Focus me'></input>
    <button onClick={focuseInput}>Focus and Highlight</button>
  
    <button onClick={resetBtn}>Reset</button>
  </div>

  );
};

export default App;
