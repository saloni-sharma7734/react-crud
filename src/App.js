import "./App.css";
import Profile from "../src/components/pages/Profile";
import Login from "../src/components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Blog from "./components/Blog";
import Signup from "./components/Signup";
import Navbar from"./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/blog" element = {<Blog/>}/>
          <Route path = "/Navbar" element = {<Navbar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
