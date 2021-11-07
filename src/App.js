import React from "react";
import Overview from "./Overview";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Overview defaultCity="London" />
        <Footer />
      </div>
    </div>
  );
}
