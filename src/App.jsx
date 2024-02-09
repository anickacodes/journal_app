import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EntryList from "./components/EntryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Entry from "./components/Entry";
import Footer from "./components/Footer";
import "./App.css";
import RPS from "./Games/RPS";
import PacMan from "./Games/PacMan";
import SignIn from "./components/SignIn";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/games" element={
            <div className="games-container">
              <PacMan />
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
