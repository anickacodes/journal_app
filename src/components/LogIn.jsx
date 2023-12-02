import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LogIn.css";

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API = import.meta.env.VITE_PORT;

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

        console.log("Login successful");
        onLogin(userData);
        navigate("/");
      } else {
        console.error("Login failed", res.statusText);
      }
    } catch (err) {
      console.error(err, "error logging in");
    }
  };

  return (
    <>
      <div className="loginContainer">
        <h1>Open Journal </h1>
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
         Username and password case-sensitive
          <button type="submit" disabled={!username || !password}>
            Login
          </button>
        </form>
        <li>
          <Link to="/users/register">Register</Link>
        </li>
      </div>
    </>
  );
};

export default LogIn;
