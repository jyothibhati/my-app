import React from "react";
import { useState } from "react";
const FormValidation =() => {
    const [userEmail, setUserEmail] = useState("");

    const handleUserInput =(param) => {
        if(param.target.value.indexOf("@") > -1 && param.target.value.indexOf(".com") > -1){
        setUserEmail(param.target.value);
        }else{
            setUserEmail("This is not a valid email")
        }
    }


    return(
        <form>
            <br/>
            <br/>
            Email:
            <input type="email" placeholder="Enter your email" onChange={handleUserInput} /><br/>
            <br/>
            This entered email ID is {userEmail}
        </form>
    );
}

export default FormValidation;