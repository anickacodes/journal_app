import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LogIn.css";
import { useUser } from '../userContext';

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_PORT;
  const { loginUser } = useUser();

//   useEffect(() => {
//     const savedUsername = localStorage.getItem("savedUsername");
//     console.log("Saved username from localStorage:", savedUsername);
//     if (savedUsername) {
//       setUsername(savedUsername);
//     }
//   }, []);

  useEffect(() => {
    localStorage.setItem("savedUsername", username);
  console.log("Username saved to localStorage:", username);
}, [username]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      const res = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        const data = await res.json();

        onLogin(userData);
        loginUser(data); 
        console.log("Login successful & user data loaded");
        navigate("/");
      } else {
        console.error("Login failed", res.statusText);
        setLoginError("Username or password is incorrect")
      }
    } catch (err) {
      console.error(err, "error logging in");
      setLoginError("An error occured while logging in. Refresh & try again in a moment.")

    }
  };

  return (
    <>
      <div className="loginContainer">
        <h1>Open Journal </h1>
        {loginError && <p className="error-message">{loginError}</p>}
        <form onSubmit={handleLogin} className="loginForm">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /> 
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
         <p id='upwd'>Username and password case-sensitive</p>
          <button type="submit" disabled={!username || !password}>
            Login
          </button>
        </form>
        <li>
          <Link to="/users/register">Register</Link>
        </li>
        {/* <li>
          <Link to="/users/reset-password">Reset Password</Link>
        </li> */}
      </div>
    </>
  );
};

export default LogIn;
