import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NumberDivisible from "./NumberDivisible";
import Calculator from "./Calculator";
import React from 'react';
import Dashboard from "./Dashboard";
import FormValidation from "./FormValidation";
import AsyncHttpMethods from "./AsyncHttpsmethods";
import Login from "./Login";



function AppRouter() {
         return( <Router>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />

            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard/formvalidation" element={<FormValidation/>}/> 
            <Route path="/dashboard/divisible" element={<NumberDivisible />}/>
            <Route path="/dashboard/calculator" element={<Calculator />}/>
            <Route path="/dashboard/Buttons" element={<AsyncHttpMethods />} />
            </Routes>
          </Router>
         );
       
}

export default AppRouter;