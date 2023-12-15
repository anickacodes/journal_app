import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { useState } from "react";

const NavBar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleLogout = (confirmed) => {
    if (confirmed) {
      onLogout();
      navigate("/");
    }
    setShowConfirmation(false);
  };

  return (
    <div className="nav">
      <nav>
        <ul>
          <li className="nav-link">
            <Link to="/">Games</Link>
          </li>
          <li className="nav-link">
            <Link to="/list">Entry List</Link>
          </li>
          {user ? (
            <div className="user-menu">
              <li className="nav-link">
                <Link to="/new">New Entry</Link>
              </li>
              <h2>Welcome, {user.username}!</h2>
              <button onClick={() => setShowConfirmation(true)}>Logout</button>
            </div>
          ) : (
            <li className="nav-link">
              <Link to="/users/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to logout?</p>
          <button onClick={() => handleLogout(true)}>✅ Yes</button>
          <button onClick={() => handleLogout(false)}>❌ No</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
