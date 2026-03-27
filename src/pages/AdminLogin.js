import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // trim input (important)
    const inputEmail = email.trim();
    const inputPassword = password.trim();

    // ✅ Your credentials
    const adminEmail = "admin@gmail.com";
    const adminPassword = "12345";

    if (inputEmail === adminEmail && inputPassword === adminPassword) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin"); // works with HashRouter also
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;