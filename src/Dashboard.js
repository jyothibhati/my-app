import { useNavigate } from "react-router-dom";
import React from "react";

const Dashboard=() =>{
    const navigate= useNavigate();
    const navigateTopages=(param)=>{
        navigate(`/dashboard/${param}`)

    }
    return(
        <>
            <h1 onClick={()=>navigateTopages("divisible")} style={{cursor:"pointer"}}>Number Divisible</h1>
            <h1 onClick={()=>navigateTopages("calculator")} style={{cursor:"pointer"}}>Calculator</h1>
            <h1 onClick={()=>navigateTopages("formvalidation")} style={{cursor:"pointer"}}>Form Validation</h1>

        </>
    )
}


export default Dashboard;