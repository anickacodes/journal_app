import { Link } from "react-router-dom";
import "../styles/NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav>
        <button>
          <Link className="nav-link" to="/">
            Main
          </Link>
        </button>

        <button>
          <Link className="nav-link" to="/list">
            Entries
          </Link>
        </button>

        <button>
          <Link className="nav-link" to="/new">
            New Entry
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
