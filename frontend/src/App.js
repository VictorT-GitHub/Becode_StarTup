import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conversation from "./Pages/Conversation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import OneConversation from "./Pages/OneConversation";
import Register from "./Pages/Register";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/login"
          element={<Login login={login} setLogin={setLogin} />}
        ></Route>
        <Route
          path="/conversation"
          element={<Conversation login={login} />}
        ></Route>
        <Route
          path="/oneconversation"
          element={<OneConversation login={login} />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
