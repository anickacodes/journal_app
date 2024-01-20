import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="intro">
          <p>We are currently conducting maintenance on the site</p>
          <p>As we work to create a smoother user experience</p>
          <p>Please feel free to browse through the app </p>
          <p style={{ color: "violet" }}>
            Or click <Link to="/games"> here </Link> to play a game
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
