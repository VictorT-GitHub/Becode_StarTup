import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/bold.png";

const Login = (props) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [error, setError] = useState("");
  const { login, setLogin } = props;
  const data = {
    email: email,
    password: password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://star-tup-api.herokuapp.com/api/auth/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        setLogin(true);
        setLoginError(false);
        navigate("/conversation");
      })
      .catch((err) => {
        setLoginError(true);
        setError(err.response.data);
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
