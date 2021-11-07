import ReactDOM from "react-dom";
import React from "react";
import Overview from "./Overview";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Overview defaultCity="London" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,

  rootElement
);
