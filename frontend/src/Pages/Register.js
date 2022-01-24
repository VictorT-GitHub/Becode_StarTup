import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(Date);
  const [motto, setMotto] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registerPage">
      <form>
        <p>Email</p>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>First Name</p>
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>Last Name</p>
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p>Birthday</p>
        <input
          type="date"
          required
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <p>
          Motto <span>(optional) </span>
        </p>
        <input value={motto} onChange={(e) => setMotto(e.target.value)} />
        <p>Password</p>
        <input
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

export default Register;
