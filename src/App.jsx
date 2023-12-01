import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import EntryList from "./components/EntryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import LogIn from "./components/LogIn";
import { useState } from "react";

import Register from "./components/Register";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Router>
        <NavBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Entry user={user} />} />
          <Route path="/list" element={<EntryList user={user} />} />
          <Route path="/users/login" element={<LogIn onLogin={handleLogin} />} />
          <Route
            path="/users/register"
            element={<Register onRegister={() => navigate("/login")} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
