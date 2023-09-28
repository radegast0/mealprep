import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Cards from "./components/Cards";
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


console.log(process.env)

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
      </Routes>
     </Router>
        
    </div>
  );
}

export default App;
