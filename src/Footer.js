import React from "react";
import "./Footer-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        <a
          href="https://github.com/jamiew555/my-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Fung-ping Wong, and it is hosted on{" "}
        <a
          href="https://serene-brown-2144ec.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          netlify
        </a>
      </small>
    </div>
  );
}
