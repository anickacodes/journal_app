import "../styles/Home.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import RPS from "../Games/RPS";
import Dino from "../Games/Dino";

const Home = () => {
  
  return (
    <>
      <div className="home_container">
        <div className="intro" />
        <br />
        This site is currently under construction
        <br />
        <p style={{color: 'violet'}}>Feel free to login/register & browse around</p>
        This site is currently under construction
        <br />
        <p style={{color: 'violet'}}>Or play a game from the options below</p>
      </div>
      <Dino />
      <RPS />
    </>
  );
};

export default Home;
