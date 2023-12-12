import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EntryList from "./components/EntryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import "./App.css";
import ResetPassword from "./components/ResetPassword";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      setUser({ token: jwtToken })
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("jwtToken", userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("jwtToken");
  };

  return (
    <>
        <NavBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/home" /> : <LogIn onLogin={handleLogin} />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<Entry user={user} />} />
          <Route path="/list" element={<EntryList user={user} />} />
          <Route
            path="/users/login"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/reset-password" element={<ResetPassword />} />
        </Routes>
    </>
  );
}

export default App;
