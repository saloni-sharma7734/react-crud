import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/pages/Profile.jsx';


function App() {
  return (
 
      <BrowserRouter>
      <Routes>
      <>
        <Route path="" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>}/>
        </>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
