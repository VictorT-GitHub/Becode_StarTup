import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conversation from "./Pages/Conversation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import OneConversation from "./Pages/OneConversation";
import Register from "./Pages/Register";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(async () => {
    await axios

      .get("https://star-tup-api.herokuapp.com/api/user/one", {
        withCredentials: true,
      })
      .then((res) => {
        setCurrentUser(res.data._id);
        console.log(currentUser);
      })
      .catch((err) => console.log(err.response.data));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/conversation"
          element={<Conversation currentUser={currentUser} />}
        ></Route>
        <Route
          path="/conversation/:id"
          element={<OneConversation currentUser={currentUser} />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
