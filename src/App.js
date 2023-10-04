import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
 
      <BrowserRouter>
      <Routes>
     
        <Route exact path="" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Navbar" element={<Navbar/>}/>
      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
