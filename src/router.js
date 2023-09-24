import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NumberDivisible from "./NumberDivisible";
import Calculator from "./Calculator";
import React from 'react';
import Dashboard from "./Dashboard";



function AppRouter() {
         return( <Router>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/divisible" element={<NumberDivisible />}/>
            <Route path="/dashboard/calculator" element={<Calculator />}/>
            </Routes>
          </Router>
         );
       
}

export default AppRouter;