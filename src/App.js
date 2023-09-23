import InputElement from "./InputElement";
import HeadingElement from "./HeadingElement";
import "./App.css";


//import React from "react"; for class component

//using functional component
function MyFirstApp() {
  return (
    <div className="my-app">

     <HeadingElement title={"Login Form"} />
     <InputElement type={"text"} placeholder={"Enter your name"}/> <br />  
     <InputElement type={"password"} placeholder={"Enter your password"}/> <br />
     <InputElement type={"email"} placeholder={"Enter your email"}/> <br />  
     <InputElement type={"phonenumber"} placeholder={"Enter your phonenumber"}/> <br />

     <button type="submit">Submit your details</button>


     </div>

  );

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

export default MyFirstApp;
  