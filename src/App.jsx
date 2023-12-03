import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import EntryList from "./components/EntryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import "./App.css";


function App() {
  const [user, setUser] = useState(null);

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
      <Router>
        <NavBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Entry user={user} />} />
          <Route path="/list" element={<EntryList user={user} />} />
          <Route
            path="/users/login"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route path="/users/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
