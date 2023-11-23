import { Link } from "react-router-dom";
import '../styles/NavBar.css'


const NavBar = ({ user }) => {
  return (
    <div className="nav">
        <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Entry List</Link></li>
        {user ? (
          <>
            <li><Link to="/new">New Entry</Link></li>
         
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
