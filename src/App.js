import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
 
      <BrowserRouter>
      <Routes>
     
        <Route exact path="" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <p>Hello</p>
      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
