import ReactDOM from "react-dom";
import React from "react";
import Weatherform from "./Weather-form";
import Overview from "./Overview";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weatherform />
        <Overview />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,

  rootElement
);
