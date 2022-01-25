import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(Date);
  const [motto, setMotto] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const validate = (e) => {
    e.preventDefault();
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
  };

  let body = {};

  if (motto) {
    body = {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      birthday: birthday,
      motto: motto,
    };
  } else {
    body = {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      birthday: birthday,
    };
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/login");
          return res.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then((json) => console.log(json));
  };

  console.log(body);
  return (
    <div className="registerPage">
      <form>
        <p>Email</p>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: emailErr ? "1px solid red" : "1px solid black",
          }}
        />
        {emailErr && <div className="emailErr">Email must be valid </div>}
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

        <button
          onClick={(e) => {
            handleRegister(e);
            validate(e);
          }}
        >
          {" "}
          Register{" "}
        </button>
      </form>
    </div>
  );
};

export default Register;
