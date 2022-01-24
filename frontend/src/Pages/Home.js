import React from "react";
import logo from "../assets/bold.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="brand">
        <img src={logo} alt="app-logo" />
        <p>Find your entrepreunarial soulmate.</p>
      </div>
      <div className="btn">
        <Link to={"/register"}>
          <button className="register">Register</button>
        </Link>
        <Link to={"/login"}>
          <button className="login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
