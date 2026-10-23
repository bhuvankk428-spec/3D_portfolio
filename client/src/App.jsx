import Home from "./components/Home"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exprience from "./components/Exprience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function App(){
  return (
      <>
         
    <BrowserRouter>
      <Navbar/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/exprience" element={<Exprience/>} />
  <Route path="/edu" element={<Education/>} />
  <Route path="/contact" element={<Contact/>} />
    <Route path="/project" element={<Project/>} />
  </Routes>
    </BrowserRouter>
    </>
  )
}
