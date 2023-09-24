import {useState , useEffect} from "react";
// import InputElement from "./InputElement";
// import HeadingElement from "./HeadingElement";
import "./App.css";
import React from 'react';



//import React from "react"; for class component

//using functional component
function NumberDivisible() {
  const [numberValue , setNumberValue] = useState(990)
  const [IsNumberEvenOrOdd , setIsNumberEvenOrOdd] = useState("")
  //getter
  //setter
  useEffect(() => {
    if(numberValue % 2 === 0){
      setIsNumberEvenOrOdd("even")
    }else{
      setIsNumberEvenOrOdd("odd")
    }
    // console.log(numberValue)
  },[numberValue])

  const increaseNumber=() => {
    setNumberValue(numberValue + 2)
  }

  
  const decreaseNumber=() => {
    setNumberValue(numberValue - 1)
  }

  
  const resetNumber =() => {
    setNumberValue(0)
  }


  return(
    <div>
      useEffect Example < br/>
       <button onClick={increaseNumber}>Increament</button>< br/>
       <button onClick={decreaseNumber}>decreament</button>< br/>
       <button onClick={resetNumber}>Reset</button>< br/>
       Number Value: {numberValue} <br/>
       value is : {IsNumberEvenOrOdd}
    </div>

  )




  // useEffect( () =>{
  //  // prompt("hello")
  //   //confirm("hello")
  //  //alert("hey alert")
  // })


  // return (
  //   <div className="my-app">

  //    <HeadingElement title={"Login Form"} />
  //    <InputElement type={"text"} placeholder={"Enter your name"}/> <br />  
  //    <InputElement type={"password"} placeholder={"Enter your password"}/> <br />
  //    <InputElement type={"email"} placeholder={"Enter your email"}/> <br />  
  //    <InputElement type={"phonenumber"} placeholder={"Enter your phonenumber"}/> <br />

  //    <button type="submit">Submit your details</button>


  //    </div>

  // );

}

//  {/* <input type="text" placeholder="Enter your name" /> <br />
//      <br />

//      <input type="password" placeholder="Enter your password" /> <br /> */}

// example of using class component

// class MyFirstApp extends React.component{
//   cunstructor(props){
//     super(props)
//   }
// }

// render(){
//   return(
//     <div className="my-app">
//        <input type="text" placeholder="Enter your name" /> <br />
//      <br />

//      <input type="password" placeholder="Enter your password" /> <br />

//      <button type="submit">Submit your details</button>

//     </div>
//   );
// }

export default NumberDivisible;
  