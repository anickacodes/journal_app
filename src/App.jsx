import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EntryList from "./components/EntryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import Footer from "./components/Footer";
import "./App.css";
import Dino from "./Games/Dino";
import RPS from "./Games/RPS";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const jwtToken = localStorage.getItem("jwtToken");
  //   if (jwtToken) {
  //     setUser({ token: jwtToken });
  //     console.log("Token retrieved from localStorage:", jwtToken);
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  // const handleLogin = (userData) => {
  //   console.log("Received token during login:", userData);
  //   setUser(userData);
  //   localStorage.setItem("jwtToken", userData.token);
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("jwtToken");
  // };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={
            <div>
              <Dino />
              <RPS />
            </div>
          }
        />
        <Route path="/new" element={<Entry />} />
        <Route path="/list" element={<EntryList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
