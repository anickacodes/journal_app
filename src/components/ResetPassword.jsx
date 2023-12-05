import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetError, setResetError] = useState(null);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_PORT;
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setResetError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${API}/users/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, token: token }),
      });

      if (res.ok) {
        console.log("Password reset successful");
        navigate("/login");
      } else {
        console.error("Password reset failed", res.statusText);
        setResetError("Password reset failed. Please try again.");
      }
    } catch (err) {
      console.error(err, "error resetting password");
      setResetError(
        "An error occurred while resetting the password. Please try again."
      );
    }
  };

  return (
    <div>
        <h2> This page is NOT fully functional</h2>
        <h2> Please DO NOT attempt a password reset YET</h2>
        <h2> Instead, register a new account</h2>
    <form onSubmit={handleResetPassword}>
      <label>
        New Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br />
      {resetError && <p className="error-message">{resetError}</p>}
      <button type="submit" disabled={!password || !confirmPassword}>
        Reset Password
      </button>
    </form>

    </div>
  );
};

export default ResetPassword;
