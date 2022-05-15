import "./App.css";
import Signup from "../src/components/Signup";
import Dashboard from "../src/components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
        <Routes>          
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </>
  );
}

export default App;
