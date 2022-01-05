import React, { useState } from "react";
import Navwebview from "./Navbar/Navwebview";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Logout from "./components/Logout";
import Post from "./components/Post";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navwebview />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Profile" element={<Profile />} />

          <Route exact path="/Experience" element={<Experience />} />

          <Route exact path="/Logout" element={<Logout />} />

          <Route exact path="/Post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
