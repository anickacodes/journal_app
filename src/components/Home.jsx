import "../styles/Home.css";
import psalm from "../assets/91kjvold.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="home_container">
      <div className="intro" />
      <br />
      This page is currently under construction
      <br />
      <br />
      Feel free to login/register & browse around
      <br />
      <br />
      This page is currently under construction
      <br />
      <br />
      <Link to="chrome://dino/">
        {" "}
        chrome://dino/ ⬅️ <br />
      </Link>{" "}
      Play a game by pasting the above url in your browser
      <br/> Clicking will not work unless already offline
    </div>
  );
};

export default Home;
