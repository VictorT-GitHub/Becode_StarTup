import React, { useState } from "react";
import addLogo from "../assets/add-circle-outline.svg";
import close from "../assets/close.svg";

const AddConv = () => {
  const [displayCreateConv, setDisplayCreateConv] = useState(false);
  //   const createConv = async () => {
  //     await fetch("http://localhost:5000/api/conv/add", {
  //       method: "POST",
  //       headers: {
  //         withCredentials: true,
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "same-origin",
  //       body: JSON.stringify({}),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  return (
    <div>
      {displayCreateConv ? (
        <div className="pop-up">
          <div className="createConv">
            <button
              className="close"
              onClick={() => setDisplayCreateConv(false)}
            >
              <img src={close} alt="close button" />
            </button>
            <input placeholder="Your Correspondent" />
            <button className="btnCreateConv"> Create </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <button className="addConv" onClick={() => setDisplayCreateConv(true)}>
        <img src={addLogo} alt="logo-add" />
      </button>
    </div>
  );
};

export default AddConv;
