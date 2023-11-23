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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Entry List</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/new">New Entry</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to logout?</p>
          <button onClick={confirmedLogOut}>✅yes</button>
          <button onClick={cancelLogout}>❌No</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
