import { Link } from "react-router-dom";
import '../styles/NavBar.css'
const NavBar = () => {
  return (
    <div className="nav">
        <Link to={"/"}>
        {" "}
        <button>🏘️</button>
      </Link>
      <Link to={"/list"}>
        {" "}
        <button>All Entries</button>
      </Link>
      <Link to={"/new"}>
        {" "}
        <button>New Entry</button>
      </Link>
    </div>
  );
};

export default NavBar;
