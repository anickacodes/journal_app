import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const API = import.meta.env.VITE_PORT;
const navigate = useNavigate()
  const handleRegistration = async (e) => {
    e.preventDefault();
    const userData = { username, email, password };

    try {
      const response = await fetch(`${API}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
          navigate('/users/login')

      } else if (response.status === 400) {
        const errorData = await response.json();
        console.error("Registration failed:", errorData.message);
      } else {
        console.error("Registration failed:", response.statusText);
      }
    //   if (response.ok) {
    //     console.log("User registered successfully!", userData);
    //     onRegister(navigate("/login"));
    //   } else {
    //     console.error("Error registering user");
    //   }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  return (
    <div className="registerContainer">
      <h1>Create an account</h1>

      <form onSubmit={handleRegistration}>
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
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


