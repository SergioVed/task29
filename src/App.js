  import { useState } from 'react';
  import './App.css';
  import { Button } from './components/button';
  import { Input } from './components/inputs';

  function App() {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [resultValue, setResultValue] = useState("Result")

    function resetFunc() {
      setResultValue("Result");
      setValue1("")
      setValue2("")
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
    function mathPow() {
      setResultValue(Math.pow(Number(value1), Number(value2)))
    }
    function division() {
      setResultValue(Number(value1) / Number(value2))
    }
    
    return(
        <div className='container'>
          <span className='container-span'>{resultValue}</span>
          <div className='input-container'>
            <Input handleInputChange={setValue1} inputValue={value1} placeholder={"Enter firs value"}/>
            <Input handleInputChange={setValue2} inputValue={value2} placeholder={"Enter second value"}/>
          </div>
          <div className='button-container'>
            <Button onClickFunc={decrement} sign="-"/>
            <Button onClickFunc={increment} sign="+"/>
            <Button onClickFunc={multiplication} sign="*"/>
            <Button onClickFunc={division} sign="/"/>
            <Button onClickFunc={mathPow} sign="^"/>
          </div>
        <button className='button-reset' onClick={resetFunc}>Reset</button>
        </div>
    )
  }
export default App;