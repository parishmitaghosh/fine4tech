import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  IndexRouteProps,
  useLocation,
  Switch,
  Router,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
