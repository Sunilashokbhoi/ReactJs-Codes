
import './App.css'
import { useState } from 'react';

function App() {
  const [counters , setCounters] = useState([{id : 1,
                                              value: 0}]);
  const addCounters = () =>{
    //[{id:1 , value: 0},{id:2 , value : 0}];
    setCounters([...counters, {id: counters.length + 1 , value: 0}]);
  };

const incrementCounter = (id) => {
     counters.map(counter => 
    setCounters(counter.id === id ?  {...counter, value: counter.value + 1 } : counter
     )
    );
};

  return (
      <div className="App" >
        <button onClick={addCounters}>Add Counter</button>
        <ul>
          {counters.map(counter =>   
            (<li key={counter.id}>
                  Counter {counter.id} : {counter.value}
                  <button onClick={()=> incrementCounter(counter.id)}>Increment</button>
              </li>
            ))
            }
        </ul>
      </div>
  );
};

export default App
