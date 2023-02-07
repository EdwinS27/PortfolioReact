// React Components
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Pages/HomePage";
import Resume from "./Pages/resume";
import ProjectPageApp from "./Pages/projectPageApp";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import CryptoCalculatorApp from './C/info'
import Contact from "./Pages/Contact";

class App extends Component{
  render(){
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/projects" element={<ProjectPageApp/>}/>
        </Routes>
        <Routes>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Routes>
          <Route path="/CryptoCalculatorApp" element={<CryptoCalculatorApp />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
export default App;
