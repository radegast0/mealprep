import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import PlanMeal from "./components/PlanMeal";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Meals from "./components/Meals";
import Form from "./components/Form";

function App() {
  const [] = useState([]);

  useEffect(()=> {
    
  },[])

  return (
    <div className="h-full">
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login/*" element={<Login />} />
        <Route path="PlanMeal/*" element={<PlanMeal />} />
        <Route path="Meals/*" element={<Meals/>}></Route>
      </Routes>
      <Footer></Footer>
     </Router>
        
    </div>
  );
}

export default App;
