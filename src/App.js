import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"; 
import {QUERY_USER ,graphcms } from "./graphql/query"
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from "./components/Login";
import PlanMeal from "./components/PlanMeal";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  const [user] = useState([]);

  useEffect(()=> {
    graphcms.request(QUERY_USER).then((res) => console.log(res))
  },[])

  return (
    <div>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login/*" element={<Login />} />
        <Route path="PlanMeal/*" element={<PlanMeal />} />
        <Route path="Test/*" element={<Test/>}> </Route>
      </Routes>
      <Footer></Footer>
     </Router>
        
    </div>
  );
}

export default App;
