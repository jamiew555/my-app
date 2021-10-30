import React from "react";
import "./Footer-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        <a
          href="https://github.com/jamiew555/Vanilla-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Fung-ping Wong
      </small>
    </div>
  );
}
