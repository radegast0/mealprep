import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards></Cards>   
    </div>
  );
}

export default App;
