import React, { useState } from "react";
import logo from "../assets/bold.png";
import Home from "./Home.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setLogin(true);
          setLoginError(false);
          setPassword("");
          setEmail("");
          return res.json();
        } else {
          console.log("Something went wrong");
          setLoginError(true);
        }
      })
      .then((json) => console.log(json));
  };

  return (
    <>
      {login ? (
        <Home />
      ) : (
        <div className="loginPage">
          <img src={logo} alt="app-logo" />
          <form>
            <input
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: loginError ? "1px solid red" : "1px solid black",
              }}
            />
            <input
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: loginError ? "1px solid red" : "1px solid black",
              }}
            />
            {loginError && (
              <p className="error-login">Wrong Email or Password</p>
            )}
            <button onClick={(e) => handleLogin(e)}> Login </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
