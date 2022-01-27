import React from "react";
import { Link } from "react-router-dom";

const Chat = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <Link to={"/"} className="oneConv">
      <h5> {data.usersID[0]} </h5>
    </Link>
  );
};

export default Chat;
