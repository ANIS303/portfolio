// import './App.css';

import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contect from "./components/Contect/Contect";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import React from "react";

function App() {

  return (
    <>
    <Navbar/>
<Home/>  
<About/>
<Skills/>
<Project/>
<Contect/>

    </>
  );
}

export default App;
