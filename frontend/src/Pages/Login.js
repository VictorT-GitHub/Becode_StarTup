import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import logo from "../assets/bold.png";

const Login = (props) => {
  const [cookies, setCookie] = useCookies(["jwt"]);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { login, setLogin } = props;

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        withCredentials: true,
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
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

          navigate("/conversation");
          return res.json();
        } else {
          console.log("Something went wrong");
          setLoginError(true);
        }
      })
      .then((json) => {
        console.log(json.user_id);
        setCookie("jwt", json.user_id);
        console.log(cookies);
      });
  };

  return (
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
        {loginError && <p className="error-login">Wrong Email or Password</p>}
        <button onClick={(e) => handleLogin(e)}> Login </button>
      </form>
    </div>
  );
};

export default Login;
