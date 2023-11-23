import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EntryList from "./components/EntryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import LogIn from "./components/LogIn";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = (userData) => {
    setUser(null)
    alert('Successfully logged out; See you next time')

  }

  return (
    <>
      <Router>
        <NavBar user={user} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Entry user={user}/>} />
          <Route path="/list" element={<EntryList user={user} />} />
          <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
