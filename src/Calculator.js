import React from 'react';
import { useState } from 'react';
function Calculator() {

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
     
    const [result,setResult] = useState(null)



    const handleNumberInput = (param) =>{
     
        setFirstNumber(Number(param.target.value))
    }
    const handleSecondNumberInput = (param) =>{
        setSecondNumber(Number(param.target.value))
    }

    const performOperation = (param) => {
        if(param === "+"){
           setResult(firstNumber + secondNumber)
        }
        if(param === "-"){
            setResult(firstNumber - secondNumber)
        }
        if(param === "*"){
            setResult( firstNumber * secondNumber)
        }
        if(param === "/"){
            setResult( firstNumber / secondNumber)
        }
    }




    return(
        <div>
            <input type="text" placeholder="enter number one" onChange={handleNumberInput} />
            <br />
            <input type="text" placeholder="enter number two" onChange={handleSecondNumberInput} />
            <br/>

            <button onClick={() =>performOperation("+")} >Add</button><br/>
            <button onClick={() =>performOperation("-")} >Subtract</button><br/>
            <button onClick={() =>performOperation("*")} >Multiply</button><br/>
            <button onClick={() =>performOperation("/")} >Divide</button><br/>
            <br/>
            This result is : {result}
       
       </div>
    );
}

export default Calculator;