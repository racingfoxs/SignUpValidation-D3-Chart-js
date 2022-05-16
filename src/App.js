import "./App.css";
import Signup from "../src/components/Signup";
import Dashboard from "../src/components/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Routes>
        <Route
          exact
          path="/signuppage"
          element={
            !isSubmitted ? (
              <Signup submitForm={submitForm} />
            ) : (
              <Navigate to="/signuppage/Dashboard" replace />
            )
          }
        />
        <Route exact path="/signuppage/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
