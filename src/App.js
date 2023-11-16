  import { useState } from 'react';
  import './App.css';
  import { Button } from './components/button';

  function App() {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [resultValue, setResultValue] = useState()

    const handleInputChange1 = (e) => {
      setValue1(e.target.value)
    }
     const handleInputChange2 = (e) => {
      setValue2(e.target.value)
     }
    function decrement() {
      setResultValue(Number(value1) - Number(value2))
    }
    function increment() {
      setResultValue(Number(value1) + Number(value2))
    }
    function multiplication() {
      setResultValue(Number(value1) * Number(value2))
    }
    
    return(
      <>
        <span>{resultValue}</span>
        <div>
          <input onChange={handleInputChange1} value={value1}></input>
          <input onChange={handleInputChange2} value={value2}></input>
        </div>
        <div>
          <Button onClickFunc={decrement} sign="-"/>
          <Button onClickFunc={increment} sign="+"/>
          <Button onClickFunc={multiplication} sign="*"/>
        </div>
      </>
    )
  }
export default App;