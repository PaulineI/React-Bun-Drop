import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Card from "./pages/Card";
import Swish from "./pages/Swish";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Card/:totalPrice" element={<Card />} />
          <Route path="/Swish/:totalPrice" element={<Swish />} />
          <Route
            path="/Confirmation/:orderId/:totalPrice"
            element={<Confirmation />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
