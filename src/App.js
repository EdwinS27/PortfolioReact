// React Components
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Pages/HomePage";
import Resume from "./Pages/resume";
import ProjectPage from "./Pages/ProjectPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import CryptoCalculatorApp from './C/info'
import Contact from "./Pages/Contact";
import AboutPage from "./Pages/About";

class App extends Component{
  render(){
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/CryptoCalculatorApp" element={<CryptoCalculatorApp />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
export default App;
