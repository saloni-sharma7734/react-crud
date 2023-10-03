import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import Signup from "./components/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
 
      <BrowserRouter>
      <Routes>
     
        <Route exact path="" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Signup" element={<Signup/>}/>
        
      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
