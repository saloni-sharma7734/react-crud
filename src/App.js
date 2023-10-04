// import logo from './logo.svg';
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Sidebar />
        <button className="btn btn-primary">Logout</button>
      </div>
    </>
  );
}

export default App;
