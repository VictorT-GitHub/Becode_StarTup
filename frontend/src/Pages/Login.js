import React, { useState } from "react";
import logo from "../assets/bold.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, "   ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginPage">
      <img src={logo} alt="app-logo" />
      <form>
        <input
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleLogin(e)}> submit </button>
      </form>
    </div>
  );
};

export default Login;
