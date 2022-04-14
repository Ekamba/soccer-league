import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
