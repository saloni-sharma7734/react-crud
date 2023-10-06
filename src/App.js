
import "./App.css";
import Sidebar from "./components/Sidebar";
import Profile from "../src/components/pages/Profile";
import Login from "../src/components/login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Blog from "./components/Blog";
import Signup from "./components/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/blog" element = {<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
