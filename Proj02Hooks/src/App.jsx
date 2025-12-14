import { useState } from 'react'
import './App.css'

function App() {
  const[backgroundColor , setBackgroundColor] = useState('#fff');

  const colors = ['#ff0000','#05fb60','#50419a','#36eff4','#f4e436','#00aaff'];
    
  const handleColorChange = (color) =>{
     setBackgroundColor(color); 
  }
  return (
      <div className='App' style={{backgroundColor}}>
          <h1>Colour Picker</h1>
          <div className='color-palette'>
            {colors.map((color, index)=>(
              <div key= {index} className='color-box'
                             style={{backgroundColor: color}}
                             onClick={() => handleColorChange(color) } >
 
              </div>
            )) }
          </div>

          <div className='custome-color-picker'>
              <input type='color' value={backgroundColor}
              onChange={(e) => handleColorChange(e.target.value)}>
              
              </input>

          </div>

       </div>
  )
}

export default App
